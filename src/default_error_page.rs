use std::io::Write;

use futures::{BoxFuture, Future};
use tokio_core::io::Io;
use tk_bufstream::IoBuf;

use minihttp::{Error, Status};

use {Pickler};

const PART1: &'static str = "\
    <!DOCTYPE html>\
    <html>\
        <head>\
            <title>\
    ";
const PART2: &'static str = "\
            </title>\
        </head>\
        <body>\
            <h1>\
    ";
const PART3: &'static str = concat!("\
            </h1>\
            <hr>\
            <p>Yours faithfully,<br>\
                swindon/", env!("CARGO_PKG_VERSION"), "\
            </p>\
        </body>\
    </html>\
    ");

pub fn error_page<S>(status: Status, mut response: Pickler<S>)
    -> BoxFuture<IoBuf<S>, Error>
    where S: Io + Send + 'static
{
    let reason = status.reason();
    let content_length = PART1.len() + PART2.len() + PART3.len() +
        2*(4 + reason.as_bytes().len());
    response.status(status);
    response.add_length(content_length as u64);
    response.add_header("Content-Type", "text/html");
    if response.done_headers() {
        write!(&mut response, "\
            {p1}{code:03} {status}{p2}{code:03} {status}{p3}",
                code=status.code(), status=status.reason(),
                p1=PART1, p2=PART2, p3=PART3)
            .expect("writing to a buffer always succeeds");
    }
    response.done().boxed()
}
