$(()=>{
    renderCards();
    async function renderCards() {
        const source = await $.get('./contactTemplate.html');
        const template = Handlebars.compile(source);
        const context = {contacts};
        const html = template(context);

        $('.contacts').html(html);
    }
});

function showDetails(id) {
    $(`#${id}`).toggle();
}

