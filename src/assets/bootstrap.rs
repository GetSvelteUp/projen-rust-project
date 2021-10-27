use lambda_http::{
    handler,
    lambda_runtime::{self, Error},
};

use ::lib::*;

#[tokio::main]
async fn main() -> Result<(), Error> {
    lambda_runtime::run(handler(handle_request)).await?;
    Ok(())
}
