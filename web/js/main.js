// TEST
var stubs = {
    cards: [
        {
            title: "Card 1",
            text: "Lorem ipsum dolor sit amet..."
        },
        {
            title: "Card 2",
            text: "Let me test something."
        },
        {
            title: "Card 3",
            text: "Now it's getting interesting..."
        }
    ]
};

// layout
var layout = new Thorax.LayoutView();
layout.appendTo('.content');

// views
var CardView = new Thorax.View({
  template: Thorax.templates.card
});

// Impl
var sock = new SockJS('http://localhost:1337/holla');

sock.onopen = function () {
    console.log('open'); // DEBUG
};

sock.onmessage = function (e) {
    console.log('message', e.data); // DEBUG

    // TEST
    /*var str = '',
        messageJson = JSON.parse(e.data),
        iCounter = messageJson.length;
    while (iCounter--) {
        str += '<div class="card"><h2>' + messageJson[iCounter].title + '</h2>' + '<p>' + messageJson[iCounter].text + '</p></div>';
    }
    $('.content').html(str);*/

    CardView.collection = new Thorax.Collection(JSON.parse(e.data));
    layout.setView(CardView);
};

sock.onclose = function () {
    console.log('close'); // DEBUG
};