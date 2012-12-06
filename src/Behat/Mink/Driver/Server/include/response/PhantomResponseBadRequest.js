phantom.injectJs( 'response/PhantomResponse.js' );

var PhantomResponseBadRequest = function( response_body )
{
    PhantomResponse.call( this, response_body, 400 );
};

PhantomResponseBadRequest.prototype = new PhantomResponse();