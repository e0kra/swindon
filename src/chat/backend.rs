//! Pull API handler.
use std::str;
use std::sync::Arc;

use futures::{Finished, finished};
use tokio_service::Service;
use tokio_core::net::TcpStream;
use tk_bufstream::IoBuf;
use minihttp::{Error, Request};
use minihttp::{ResponseFn, Status};
use minihttp::enums::Method;
use rustc_serialize::json::{self, Json};

use {Pickler};
use config::ConfigCell;
use response::DebugInfo;
use default_error_page::write_error_page;
use intern::{Topic, Lattice, BadIdent};

use super::{parse_cid, ProcessorPool};
use super::processor::{Action, Delta};


/// Chat Backend Http handler.
#[derive(Clone)]
pub struct ChatBackend {
    pub config: ConfigCell,
    pub chat_pool: ProcessorPool,
}


impl Service for ChatBackend {
    type Request = Request;
    type Response = ResponseFn<Finished<IoBuf<TcpStream>, Error>, TcpStream>;
    type Error = Error;
    type Future = Finished<Self::Response, Error>;

    fn call(&self, req: Request) -> Self::Future {
        let cfg = self.config.get();
        let status = self.serve(&req);
        finished(ResponseFn::new(move |res| {
            let res = Pickler(res, cfg.clone(), DebugInfo::new(&req));
            write_error_page(status, res).done()
        }))
    }
}

impl ChatBackend {

    fn serve(&self, req: &Request) -> Status {
        use self::ChatRoute::*;

        let route = match match_route(&req.method, req.path.as_str()) {
            Ok(r) => r,
            Err(_) => return Status::NotFound
        };
        let payload = match req.body {
            Some(ref body) => {
                str::from_utf8(&body.data[..]).ok()
                    .and_then(|s| Json::from_str(s).ok())
            }
            None => None
        };
        if route.expect_data() && payload.is_none() {
            return Status::BadRequest;
        }
        let action = match route {
            TopicSubscribe(client_id, topic) => {
                let cid = parse_cid(client_id);
                Action::Subscribe {
                    conn_id: cid,
                    topic: topic,
                }
            }
            TopicUnsubscribe(client_id, topic) => {
                let cid = parse_cid(client_id);
                Action::Unsubscribe {
                    conn_id: cid,
                    topic: topic,
                }
            }
            LatticeSubscribe(client_id, namespace) => {
                let cid = parse_cid(client_id);
                let delta = match decode_delta(req) {
                    Ok(delta) => delta,
                    Err(err) => {
                        info!("Error {:?}", err);
                        return Status::BadRequest
                    }
                };
                self.chat_pool.send(Action::Lattice {
                    namespace: namespace.clone(),
                    delta: delta,
                });
                Action::Attach {
                    namespace: namespace,
                    conn_id: cid,
                }
            }
            LatticeUnsubscribe(client_id, namespace) => {
                let cid = parse_cid(client_id);
                Action::Detach {
                    namespace: namespace,
                    conn_id: cid,
                }
            }
            TopicPublish(topic) => {
                let data = Arc::new(payload.unwrap());
                Action::Publish {
                    topic: topic,
                    data: data,
                }
            }
            LatticeUpdate(namespace) => {
                let delta = match decode_delta(req) {
                    Ok(delta) => delta,
                    Err(err) => {
                        info!("Error {:?}", err);
                        return Status::BadRequest
                    }
                };
                Action::Lattice {
                    namespace: namespace,
                    delta: delta,
                }
            }
        };
        self.chat_pool.send(action);
        Status::NoContent
    }

}

fn decode_delta(req: &Request) -> Result<Delta, json::DecoderError>
{
    // NOTE: we assume body exist and is valid json
    //  (ie: it parsed earlier)
    let body = req.body.as_ref().unwrap();
    let body = str::from_utf8(&body.data[..]).unwrap();
    json::decode::<Delta>(body)
}

quick_error! {
    #[derive(Debug)]
    enum MatchError {
        BadIdent(err: BadIdent) {
            from()
            display("bad ident: {}", err)
            description(err.description())
        }
        UnknownRoute {
            description("unknown route")
        }
        InvalidRoute {
            description("malformed route")
        }
    }
}

fn match_route(method: &Method, path: &str) -> Result<ChatRoute, MatchError> {
    use minihttp::enums::Method::*;
    use self::ChatRoute::*;
    use self::MatchError::*;

    if !path.starts_with("/v1/") {
        return Err(UnknownRoute)
    }
    let mut it = path.split("/").skip(2);   // skip '' & 'v1'
    let route = match (method, it.next()) {
        (&Post, Some(kind)) => {
            if !it.next().map(|x| x.len() > 0).unwrap_or(false) {
                return Err(InvalidRoute)
            }
            match kind {
                "lattice" => {
                    let (_, namespace) = path.split_at("/v1/lattice/".len());
                    let namespace = namespace.replace("/", ".").parse()?;
                    ChatRoute::LatticeUpdate(namespace)
                }
                "publish" => {
                    let (_, topic) = path.split_at("/v1/publish/".len());
                    let topic = topic.replace("/", ".").parse()?;
                    TopicPublish(topic)
                }
                _ => return Err(UnknownRoute)
            }
        }
        (&Put, Some("connection")) |
        (&Delete, Some("connection")) => {
            let id = match it.next() {
                Some(id) if id.len() > 0 => id,
                _ => return Err(InvalidRoute),
            };
            // TODO: validate ConnectionID (/ClientID)

            let kind = it.next();
            if !it.next().map(|x| x.len() > 0).unwrap_or(false) {
                return Err(InvalidRoute)
            }
            match kind {
                Some("subscriptions") => {
                    let (_, topic) = path.split_at(
                        "/v1/connection//subscriptions/".len() + id.len());
                    let topic = topic.replace("/", ".").parse()?;
                    if method == &Put {
                        TopicSubscribe(id.to_string(), topic)
                    } else {
                        TopicUnsubscribe(id.to_string(), topic)
                    }
                }
                Some("lattices") => {
                    let (_, namespace) = path.split_at(
                        "/v1/connection//lattices/".len() + id.len());
                    let namespace = namespace.replace("/", ".").parse()?;
                    if method == &Put {
                        LatticeSubscribe(
                            id.to_string(), namespace)
                    } else {
                        LatticeUnsubscribe(
                            id.to_string(), namespace)
                    }
                }
                _ => return Err(UnknownRoute)
            }
        }
        _ => return Err(UnknownRoute)
    };
    Ok(route)
}


#[derive(Debug, PartialEq)]
pub enum ChatRoute {
    TopicSubscribe(String, Topic),
    TopicUnsubscribe(String, Topic),
    LatticeSubscribe(String, Lattice),
    LatticeUnsubscribe(String, Lattice),
    TopicPublish(Topic),
    LatticeUpdate(Lattice),
}

impl ChatRoute {
    fn expect_data(&self) -> bool {
        use self::ChatRoute::*;
        match *self {
            TopicPublish(_) |
            LatticeSubscribe(_, _) |
            LatticeUpdate(_) => true,

            TopicSubscribe(_, _) |
            TopicUnsubscribe(_, _) |
            LatticeUnsubscribe(_, _) => false,
        }
    }
}


#[cfg(test)]
mod test {
    use minihttp::enums::Method;
    use string_intern::Symbol;

    use super::match_route;
    use super::ChatRoute::*;
    use super::MatchError;

    #[test]
    fn match_topic_publish() {
        let path = "/v1/publish/test-chat/room1";
        let route = match_route(&Method::Post, path).unwrap();
        assert_eq!(route, TopicPublish(Symbol::from("test-chat.room1")));
    }

    #[test]
    fn match_lattice_update() {
        let path = "/v1/lattice/test-chat/rooms";
        let route = match_route(&Method::Post, path).unwrap();
        assert_eq!(route, LatticeUpdate(Symbol::from("test-chat.rooms")));
    }

    #[test]
    fn match_topic_subscribe() {
        let path = "/v1/connection/abcde/subscriptions/test-chat/room1";
        let route = match_route(&Method::Put, path).unwrap();
        assert_eq!(route, TopicSubscribe(
            "abcde".to_string(), Symbol::from("test-chat.room1")));
    }

    #[test]
    fn match_topic_unsubscribe() {
        let path = "/v1/connection/abcde/subscriptions/test-chat/room1";
        let route = match_route(&Method::Delete, path).unwrap();
        assert_eq!(route, TopicUnsubscribe(
            "abcde".to_string(), Symbol::from("test-chat.room1")));
    }

    #[test]
    fn match_lattice_subscribe() {
        let path = "/v1/connection/abcde/lattices/test-chat/room1";
        let route = match_route(&Method::Put, path).unwrap();
        assert_eq!(route, LatticeSubscribe(
            "abcde".to_string(), Symbol::from("test-chat.room1")));
    }

    #[test]
    fn match_lattice_unsubscribe() {
        let path = "/v1/connection/abcde/lattices/test-chat/room1";
        let route = match_route(&Method::Delete, path).unwrap();
        assert_eq!(route, LatticeUnsubscribe(
            "abcde".to_string(), Symbol::from("test-chat.room1")));
    }

    #[test]
    fn no_matches() {
        let path = "/v/";
        assert!(match_route(&Method::Get, path).is_err());
        assert!(match_route(&Method::Put, path).is_err());
        assert!(match_route(&Method::Post, path).is_err());
        assert!(match_route(&Method::Patch, path).is_err());
        assert!(match_route(&Method::Delete, path).is_err());

        let path = "/v1/";
        assert!(match_route(&Method::Get, path).is_err());
        assert!(match_route(&Method::Put, path).is_err());
        assert!(match_route(&Method::Post, path).is_err());
        assert!(match_route(&Method::Patch, path).is_err());
        assert!(match_route(&Method::Delete, path).is_err());

        let path = "/v1/publish";
        assert!(match_route(&Method::Get, path).is_err());
        assert!(match_route(&Method::Put, path).is_err());
        assert!(match_route(&Method::Post, path).is_err());
        assert!(match_route(&Method::Patch, path).is_err());
        assert!(match_route(&Method::Delete, path).is_err());

        let path = "/v1/publish/";
        assert!(match_route(&Method::Get, path).is_err());
        assert!(match_route(&Method::Put, path).is_err());
        assert!(match_route(&Method::Post, path).is_err());
        assert!(match_route(&Method::Patch, path).is_err());
        assert!(match_route(&Method::Delete, path).is_err());

        let path = "/v1/publish/test-chat/room1";
        assert!(match_route(&Method::Get, path).is_err());
        assert!(match_route(&Method::Put, path).is_err());
        assert!(match_route(&Method::Patch, path).is_err());
        assert!(match_route(&Method::Delete, path).is_err());

        let path = "/v1/lattice/test-chat/rooms";
        assert!(match_route(&Method::Get, path).is_err());
        assert!(match_route(&Method::Put, path).is_err());
        assert!(match_route(&Method::Patch, path).is_err());
        assert!(match_route(&Method::Delete, path).is_err());

        let path = "/v1/connection//subscriptions/";
        assert!(match_route(&Method::Get, path).is_err());
        assert!(match_route(&Method::Put, path).is_err());
        assert!(match_route(&Method::Post, path).is_err());
        assert!(match_route(&Method::Patch, path).is_err());
        assert!(match_route(&Method::Delete, path).is_err());

        let path = "/v1/connection/abc/subscriptions/";
        assert!(match_route(&Method::Get, path).is_err());
        assert!(match_route(&Method::Put, path).is_err());
        assert!(match_route(&Method::Post, path).is_err());
        assert!(match_route(&Method::Patch, path).is_err());
        assert!(match_route(&Method::Delete, path).is_err());

        let path = "/v1/connection/conn_id/subscriptions/room,1";
        assert!(match_route(&Method::Get, path).is_err());
        assert!(match_route(&Method::Put, path).is_err());
        assert!(match_route(&Method::Post, path).is_err());
        assert!(match_route(&Method::Patch, path).is_err());
        assert!(match_route(&Method::Delete, path).is_err());
    }
}
