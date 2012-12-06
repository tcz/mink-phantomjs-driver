var server, port;

phantom.libraryPath = 'include/';
phantom.injectJs( 'PhantomWebServer.js' );
phantom.injectJs( 'PhantomState.js' );

server 	= require('webserver').create();
port 	= 8899;

var web_server = new PhantomWebServer( server, port, console );
web_server.start();