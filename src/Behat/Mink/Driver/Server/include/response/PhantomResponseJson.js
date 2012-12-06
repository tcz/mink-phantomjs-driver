phantom.injectJs( 'response/PhantomResponse.js' );

var PhantomResponseJson = function( response )
{
    PhantomResponse.call( this, JSON.stringify( response ), 200 );
};

PhantomResponseJson.prototype = new PhantomResponse();