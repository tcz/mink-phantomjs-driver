phantom.injectJs( 'PhantomUrls.js' );
phantom.injectJs( 'action/PhantomActionVisit.js' );
phantom.injectJs( 'action/PhantomActionGetCurrentUrl.js' );
phantom.injectJs( 'action/PhantomActionReload.js' );
phantom.injectJs( 'action/PhantomActionNotFound.js' );

var PhantomWebServer = function( server, port, logger )
{
    this.server = server;
    this.port   = port;
    this.logger = logger || null;
};

PhantomWebServer.prototype.start = function()
{
    var self = this;

    this.logger.log( 'Starting service on port ' + this.port );

    this.service = this.server.listen( this.port, function( request, response )
    {
        self._handleRequest( request, response );
    } );
};

PhantomWebServer.prototype._handleRequest = function( request, response )
{
    var action, action_response;

    action = this._routeRequest( request );
    
    action.execute( function( action_response ) 
    {
        response.statusCode = action_response.getStatusCode();
        response.write( action_response.getResponseBody() );
        response.close();
    } );
};

PhantomWebServer.prototype._routeRequest = function( request )
{
    var path, params, action, action_params;
        
    path = PhantomUrls.getRequestPath( request );
    this.logger.log( 'Requested path is: ' + path );

    switch ( path )
    {
        case '/visit':
            action = new PhantomActionVisit();
            break;
        case '/getCurrentUrl':
            action = new PhantomActionGetCurrentUrl();
            break;
        case '/reload':
            action = new PhantomActionReload();
            break;
        default:
            action = new PhantomActionNotFound();
    }

    params = PhantomUrls.getRequestParams( request );

    if ( "undefined" !== typeof params['params'] )
    {
        action_params = JSON.parse( params['params'] );
    }
    else
    {
        action_params = {}; 
    }

    action.setParams( action_params );

    return action;
};