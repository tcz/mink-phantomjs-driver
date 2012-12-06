phantom.injectJs( 'response/PhantomResponseNotImplemented.js' );

var PhantomAction = function() 
{
    this.params = {};
};

PhantomAction.prototype.setParams = function( params )
{
    this.params = params;
};

PhantomAction.prototype.execute = function( callback )
{
    // By default execute will yield an empty response with 501 - Not Implemented.
    callback( new PhantomResponseNotImplemented( 'This action is not yet implemented' ) );
};