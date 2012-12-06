var PhantomResponse = function( response_body, status_code )
{
    this.response_body  = response_body;
    this.status_code    = status_code;
};

PhantomResponse.prototype.getStatusCode = function()
{
    return this.status_code;
};

PhantomResponse.prototype.getResponseBody = function()
{
    return this.response_body;
};