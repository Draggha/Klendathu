/*global require*/
function startServer() {
    "use strict";

    // libs
    var Yoke = require('yoke/Yoke'),
        Router = require('yoke/middleware/Router'),
        ResponseTime = require('yoke/middleware/ResponseTime'),
        //var MicroTemplateEngine = require('yoke/engine/MicroTemplateEngine');

        // local vars
        yoke = new Yoke(),
        router = new Router();


    yoke.use(new ResponseTime());
    yoke.use(router);
    router.get('/hello', function (req) {
        req.response.sendFile('web/index.html');
    });
    // all other resources are forbidden
    yoke.use(function (req, next) {
        next(404);
    });

    // engines
    //yoke.engine('html', new MicroTemplateEngine());

    // start server
    yoke.listen(8080);
}

// Bootstrap the server
startServer();