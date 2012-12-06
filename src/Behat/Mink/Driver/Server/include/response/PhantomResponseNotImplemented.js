phantom.injectJs( 'response/PhantomResponse.js' );

var PhantomResponseNotImplemented = function( response_body )
{
    PhantomResponse.call( this, response_body, 501 );
};

PhantomResponseNotImplemented.prototype = new PhantomResponse();