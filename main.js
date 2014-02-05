var vertx = require('vertx'),
    eb = vertx.eventBus,
    port = 8080,
    sockPort = 1337,
    httpServer = vertx.createHttpServer(),
    sockHttpServer = vertx.createHttpServer(),
    sockJSSserver = vertx.createSockJSServer(sockHttpServer);

httpServer.requestHandler(function (req) {
    var file = '';
    if (req.path() == '/') {
        file = 'index.html';
    } else if (req.path().indexOf('..') == -1) {
        file = req.path();
    }
    req.response.sendFile('web/' + file, "web/404.html");
});

httpServer.listen(port, "localhost");

sockJSSserver.bridge({
    prefix: '/eventbus'
}, [{
    adress: 'test'
}], [{
    adress: 'test'
}]);

eb.registerHandler('test.get', function (message) {
    eb.send('test', {
        project: 'Klendathu',
        cards: [
            {
                id: 1,
                title: "Card 1",
                text: "Lorem ipsum dolor sit amet..."
            },
            {
                id: 2,
                title: "Card 2",
                text: "Let me test something."
            },
            {
                id: 3,
                title: "Card 3",
                text: "Now it's getting interesting..."
            }
        ]
    });
});

sockHttpServer.listen(sockPort, "localhost");
