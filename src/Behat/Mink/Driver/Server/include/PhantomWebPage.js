var PhantomWebPage = function()
{
    var webpage = require('webpage').create();
    // Making it quicker.
    webpage.settings.loadImages = false;
    webpage.viewportSize        = { 
        width: 1024, 
        height: 600 
    };

    return webpage;
}

PhantomWebPage.get = function()
{
    if ( 'undefined' === typeof PhantomState.webpage )
    {
        PhantomState.webpage = new PhantomWebPage();
    }

    return PhantomState.webpage;
}

PhantomWebPage.visit = function( url, callback )
{
    this.get().open( url, callback );
}

PhantomWebPage.getCurrentUrl = function()
{
    var url = this.get().evaluate( function () 
    {
        return window.location.href;
    } );

    return url;
}

PhantomWebPage.reload = function( callback )
{
    this.visit( this.getCurrentUrl(), callback );
}
