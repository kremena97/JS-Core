function attachEvents() {
    let url = `https://messenger-91da5.firebaseio.com/messenger`;

    function loadMessages() {
        $.get(url + '.json').then(displayMessages);
    }

    function displayMessages(messages) {
        $('#messages').empty();
        let orderedMessages = {};
        messages = Object.keys(messages).sort((a, b) => a.timestamp - b.timestamp).forEach(k => orderedMessages[k] = messages[k]);

        for (let message of Object.keys(orderedMessages)) {
            $('#messages').append(`${orderedMessages[message]['author']}: ${orderedMessages[message]['content']}\n`);
        }
    }

    function createMessage() {
        let data = {
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };

        $('#author').val('');
        $('#content').val('');

        $.post(url + '.json', JSON.stringify(data))
            .then(loadMessages);
    }

    $('#submit').click(createMessage);

    $('#refresh').click(loadMessages);

    loadMessages()
}