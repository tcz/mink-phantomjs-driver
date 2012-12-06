phantom.injectJs( 'action/PhantomAction.js' );
phantom.injectJs( 'response/PhantomResponseBadRequest.js' );
phantom.injectJs( 'response/PhantomResponseJson.js' );
phantom.injectJs( 'PhantomWebPage.js' );

var PhantomActionVisit = function()
{
    PhantomAction.call( this );
};

PhantomActionVisit.prototype = new PhantomAction();

PhantomActionVisit.prototype.execute = function( callback )
{
    var url     = this.params.url;   

    if ( !url )
    {
        return new PhantomResponseBadRequest( 'Bad Request - missing url parameter', 400 );        
    }

    PhantomWebPage.visit( url, function ( status ) 
    {
        callback( new PhantomResponseJson( 'success' === status ) );
    } );
};
