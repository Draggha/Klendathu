Klendathu.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:1337',
    namespace: 'eventbus'
});

Klendathu.ApplicationRoute = Ember.Route.extend({
    setupController : function(controller, model){
        
        var store = this.get('store');
        
        Klendathu.eb.send('cards.find', true, function (reply) {
            store.push('cards', reply);
        });
        
        
        
        
    }
});