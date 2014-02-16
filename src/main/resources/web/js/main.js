window.Klendathu = Ember.Application.create();

Klendathu.Router.map(function () {
    this.resource('cards');
});


Klendathu.CardsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('card');
    }
});

Klendathu.Card = DS.Model.extend({
    title: DS.attr('string'),
    text: DS.attr('string')
});

Klendathu.ApplicationAdapter = DS.FixtureAdapter.extend();

Klendathu.Card.FIXTURES = [
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
];