window.Klendathu = Ember.Application.create();

window.Klendathu.eb = new vertx.EventBus(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/eventbus');