use futures::future::Future;
use tk_http::server::{Codec, EncoderDone, Error};
use tk_sendfile::Destination;
use tokio_io::{AsyncRead, AsyncWrite};

use metrics::{Metric, List};

mod input;
mod router;
mod debug;
mod encoder;
mod quick_reply;
mod handler;
mod authorizer;

pub type Request<S> = Box<Codec<S, ResponseFuture=Reply<S>>>;
pub type Reply<S> = Box<Future<Item=EncoderDone<S>, Error=Error>>;

pub use self::debug::Debug;
pub use self::encoder::{Encoder, IntoContext, Context};
pub use self::input::{Input, AuthInput};
pub use self::quick_reply::reply;
pub use self::router::Router;

/// A transport trait. We currently include ``AsRawFd`` in it to allow
/// sendfile to work. But in the future we want to use specialization
/// to optimize sendfile
pub trait Transport: AsyncRead + AsyncWrite + Destination + 'static {}
impl<T: AsyncRead + AsyncWrite + Destination + 'static> Transport for T {}

pub fn metrics() -> List {
    vec![
        // obeys cantal-py.RequestTracker
        (Metric("frontend.incoming", "requests"), &*router::REQUESTS),
    ]
}
