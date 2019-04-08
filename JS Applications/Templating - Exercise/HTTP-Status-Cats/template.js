$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        const source = await $('#cat-template').html();
        const template = Handlebars.compile(source);
        const context = {cats};
        const html = template(context);
        $('#allCats').html(html);
    }
});

function showStatusCode(id) {

    let button = $(`#${id}`).toggle().parent().children()[0];
    
    if (button.textContent === 'Show status code'){
        button.textContent = 'Hide status code';
    } else{
        button.textContent = 'Show status code';
    }
}