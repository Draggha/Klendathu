Klendathu.Router.map(function() {
    this.resource('cards', { path: '/' });
});

Klendathu.eb.onopen = function () {
    Klendathu.CardsRoute = Ember.Route.extend({
        /*model: function() {
            return this.store.find('cards');
        },*/$$
        setupController : function(controller, model){
            var store = this.get('store');

            Klendathu.eb.send('cards.find', true, function (reply) {
                store.push('cards', JSON.parse(reply).cards || []);
            });
        }
    });
};