phantom.injectJs( 'action/PhantomAction.js' );
phantom.injectJs( 'response/PhantomResponseBadRequest.js' );
phantom.injectJs( 'response/PhantomResponseJson.js' );
phantom.injectJs( 'PhantomWebPage.js' );

var PhantomActionGetCurrentUrl = function()
{
    PhantomAction.call( this );
};

PhantomActionGetCurrentUrl.prototype = new PhantomAction();

PhantomActionGetCurrentUrl.prototype.execute = function( callback )
{
    var url = PhantomWebPage.getCurrentUrl();

    callback( new PhantomResponseJson( url ) );
};
