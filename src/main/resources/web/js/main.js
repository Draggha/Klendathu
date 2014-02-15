/*Klendathu.eb.onopen = function () {
    eb.registerHandler('test.template', function (message) {
        
        console.log(view);
    });

    $('.card-generator_button').on('click', function (e) {
        eb.send('test.get', true, function (reply) {
            console.log('Project: ' + reply.project);
            reply.cards.forEach(function (card) {
                console.log('\tId: ' + card.id);
                console.log('\tTitle: ' + card.title);
                console.log('\tText: ' + card.text);
            });
            
        });
    });

    eb.send('templates.card.get', true, function (reply) {
        
    });
};*/