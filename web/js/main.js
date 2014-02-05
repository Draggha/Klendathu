// layout
//var layout = new Thorax.LayoutView();
//layout.appendTo('.content');

// views
//var CardView = new Thorax.View({
//    template: Thorax.templates.card
//});

//    CardView.collection = new Thorax.Collection(JSON.parse(e.data));
//    layout.setView(CardView);

var eb = new vertx.EventBus('http://localhost:1337/eventbus');

eb.onopen = function () {
    eb.registerHandler('test', function (message) {
        console.log('Project: ' + message.project);
        message.cards.forEach(function (card) {
            console.log('\tId: ' + card.id);
            console.log('\tTitle: ' + card.title);
            console.log('\tText: ' + card.text);
        });
    });

    $('.card-generator_button').on('click', function (e) {
        eb.send('test.get', true);
    });
};
