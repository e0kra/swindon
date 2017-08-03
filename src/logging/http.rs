use std::fmt;
use std::net::SocketAddr;

use tk_http::Status;
use tk_http::server::Head;
use trimmer::{Variable, Var, DataError};

use incoming::Debug;
use runtime::Runtime;
use request_id::RequestId;
use logging::context::{Context, AsContext};


pub struct EarlyRequest<'a> {
    pub addr: SocketAddr,
    pub head: &'a Head<'a>,
    pub request_id: RequestId,
    pub debug: &'a Debug,
}

pub struct EarlyResponse {
    pub status: Status,
}

pub struct EarlyError<'a> {
    pub request: EarlyRequest<'a>,
    pub response: EarlyResponse,
}

impl<'a> AsContext for EarlyError<'a> {
    fn as_context(&self) -> Context {
        let mut ctx = Context::new();
        ctx.set("request", &self.request);
        ctx
    }
}

impl<'a> Variable<'a> for EarlyRequest<'a> {
    fn attr<'x>(&'x self, attr: &str) -> Result<Var<'x, 'a>, DataError>
        where 'a: 'x
    {
        match attr {
            // TODO(tailhook) return just IP when trimmer is updated
            "client_ip" => Ok(Var::owned(self.addr.ip().to_string())),
            "host" => Ok(Var::owned(
                self.head.host()
                .unwrap_or("-")
                .to_string())),
            _ => Err(DataError::AttrNotFound),
        }
    }
    fn typename(&self) -> &'static str {
        "EarlyRequest"
    }
}

impl<'a> fmt::Debug for EarlyRequest<'a> {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.debug_struct("EarlyRequest")
         .finish()
    }
}
