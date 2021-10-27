use lambda_http::{
    lambda_runtime::{Context, Error},
    IntoResponse, Request, RequestExt,
};

pub async fn handle_request(request: Request, _: Context) -> Result<impl IntoResponse, Error> {
    Ok(())
}
