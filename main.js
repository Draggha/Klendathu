var
    // libs
    vertx = require('vertx'),
    console = require('vertx/console'),
    // vars
    port = 8080,
    sockPort = 1337,
    httpServer = vertx.createHttpServer(),
    sockHttpServer = vertx.createHttpServer(),
    sockJSSserver = vertx.createSockJSServer(sockHttpServer),
    sockJSConfig = { prefix: '/holla' };

httpServer.requestHandler(function(req) {
    var file = '';
    if (req.path() == '/') {
        file = 'index.html';
    } else if (req.path().indexOf('..') == -1) {
        file = req.path();
    }
    req.response.sendFile('web/' + file, "web/404.html");
});

httpServer.listen(port, "localhost");

sockJSSserver.installApp(sockJSConfig,  function (sock) {
    new vertx.Pump(sock, sock).start();
});

sockHttpServer.listen(sockPort, "localhost");

/*
vertx.eventBus.registerHandler('ping-address', function(message, replier) {
    replier('pong!');
    console.log('Sent back pong JavaScript!')
});
*/