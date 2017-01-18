use std::sync::Arc;

use tokio_core::io::Io;
use minihttp::Version;
use minihttp::client::{Encoder, EncoderDone};
use incoming::{Input};


/// A repeatable (so fully-buffered) request structure
#[derive(Clone, Debug)]
pub struct RepReq(Arc<ReqData>);

pub struct HalfReq {
    method: String,
    path: String,
    host: String,
    headers: Vec<(String, Vec<u8>)>,
}

#[derive(Debug)]
struct ReqData {
    method: String,
    path: String,
    host: String,
    headers: Vec<(String, Vec<u8>)>,
    body: Vec<u8>,
}


impl HalfReq {
    pub fn from_input(inp: &Input) -> HalfReq {
        use minihttp::server::RequestTarget::*;
        let path = match *inp.headers.request_target() {
            Origin(x) => x.to_string(),
            Absolute { path, ..} => path.to_string(),
            Authority(..) => unimplemented!(),  // TODO(tailhook) throw error
            Asterisk => String::from("*"),
        };
        HalfReq {
            method: inp.headers.method().to_string(),
            path: path,
            host: inp.headers.host().expect("host exists").to_string(),
            headers: inp.headers.headers().map(|(k, v)| {
                (k.to_string(), v.to_vec())
            }).collect(),
        }
    }
    pub fn upgrade(self, body: Vec<u8>) -> RepReq {
        RepReq(Arc::new(ReqData {
            method: self.method,
            path: self.path,
            host: self.host,
            headers: self.headers,
            body: body,
        }))
    }
}
impl RepReq {
    pub fn encode<S:Io>(&self, mut e: Encoder<S>) -> EncoderDone<S>{
        let ref r = *self.0;
        e.request_line(&r.method, &r.path, Version::Http11);

        // Spec doesn't mandate, but recomments it to be first
        e.add_header("Host", &r.host).unwrap();

        for &(ref k, ref v) in &r.headers {
            e.add_header(k, v).unwrap();
        }
        e.add_length(r.body.len() as u64).unwrap();
        e.done_headers().unwrap();
        if r.body.len() != 0 {
            e.write_body(&r.body);
        }
        return e.done();
    }
}