/*global require*/
function startServer() {
    "use strict";

    // libs
    var Yoke = require('yoke/Yoke'),
        Router = require('yoke/middleware/Router'),
        ResponseTime = require('yoke/middleware/ResponseTime'),
        MicroTemplateEngine = require('yoke/engine/MicroTemplateEngine'),

        // local vars
        yoke = new Yoke(),
        router = new Router();


    // engines
    yoke.engine('html', new MicroTemplateEngine());

    // other Middleware
    yoke.use(new ResponseTime());
    yoke.use(router);

    // Routes
    router.get('/hello', function (req) {
        req.response().render('src/main/resources/web/index.html');
    });
    // all other resources are forbidden
    yoke.use(function (req, next) {
        next(404);
    });

    // start server
    yoke.listen(8080);
}

// Bootstrap the server
startServer();