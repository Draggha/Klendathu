var Yoke = require('yoke/Yoke');
var Router = require('yoke/middleware/Router');
var ResponseTime = require('yoke/middleware/ResponseTime');
//var MicroTemplateEngine = require('yoke/engine/MicroTemplateEngine');

var yoke = new Yoke();
var router = new Router();
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


/*var container = require('vertx/container');

container.deployModule('com.jetdrone~yoke~1.0.3');

var Yoke = require('Yoke');

var yoke = new Yoke();
yoke.use(function (req) {
    var file = '';
    if (req.path() == '/') {
        file = 'index.html';
    } else if (req.path().indexOf('..') == -1) {
        file = req.path();
    }
    req.response.sendFile('web/' + file, "web/404.html");
});
yoke.listen(8080);*/