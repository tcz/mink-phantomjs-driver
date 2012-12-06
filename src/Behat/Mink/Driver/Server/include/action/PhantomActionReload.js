phantom.injectJs( 'action/PhantomAction.js' );
phantom.injectJs( 'response/PhantomResponseBadRequest.js' );
phantom.injectJs( 'response/PhantomResponseJson.js' );
phantom.injectJs( 'PhantomWebPage.js' );

var PhantomActionReload = function()
{
    PhantomAction.call( this );
};

PhantomActionReload.prototype = new PhantomAction();

PhantomActionReload.prototype.execute = function( callback )
{
    PhantomWebPage.reload( function ( status ) 
    {
        callback( new PhantomResponseJson( 'success' === status ) );
    } );
};
