function attachEvents() {
    let url = 'https://phonebook-nakov.firebaseio.com/phonebook';

    function loadContacts() {
        $.get(url + '.json')
            .then(displayContacts);
    }

    function displayContacts(contacts) {
        $('#phonebook').empty();
        for (let contact of Object.keys(contacts)) {
            $('#phonebook')
                .append(`<li>${contacts[contact]['person']}: ${contacts[contact]['phone']}</li>`);
            $('#phonebook li:last').append($('<button>').text('Delete').click(function () {
                deleteContact(contact)
            }));
        }
    }

    function createContact() {
        let data = {
            person: $('#person').val(),
            phone: $('#phone').val()
        };

        $.post(url + '.json', JSON.stringify(data))
            .then(loadContacts);

        $('#person').val('');
        $('#phone').val('');
    }

    function deleteContact(id) {
        $.ajax({
            method: 'DELETE',
            url: url + '/' + id + '.json'
        }).then(loadContacts);
    }

    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(createContact);
}
