phantom.injectJs( 'action/PhantomAction.js' );
phantom.injectJs( 'response/PhantomResponseNotFound.js' );

var PhantomActionNotFound = function()
{
    PhantomAction.call( this );
};

PhantomActionNotFound.prototype = new PhantomAction();

PhantomActionNotFound.prototype.execute = function( callback )
{
    callback( new PhantomResponseNotFound( 'Not found' ) );
};