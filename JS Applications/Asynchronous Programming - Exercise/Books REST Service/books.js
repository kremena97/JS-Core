function attachEvents() {
    const url = 'https://baas.kinvey.com/apdata/kid_BJjJ0rbt4/books';
    const headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json'
    };

    $('.add').click(createBook);

    function createBook() {

    }
}