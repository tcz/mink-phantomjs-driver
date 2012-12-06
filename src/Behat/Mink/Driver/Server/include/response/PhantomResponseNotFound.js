phantom.injectJs( 'response/PhantomResponse.js' );

var PhantomResponseNotFound = function( response_body )
{
    PhantomResponse.call( this, response_body, 404 );
};

PhantomResponseNotFound.prototype = new PhantomResponse();