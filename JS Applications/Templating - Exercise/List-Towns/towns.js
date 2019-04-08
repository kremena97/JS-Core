function attachEvents() {
    $('#btnLoadTowns').click(function () {
        let towns = $('#towns').val().split(', ').map(x=>{
            return {town: x}
        });

        renderTowns();
        async function renderTowns() {
            const source = await $('#towns-template').html();
            console.log(source);
            const template = Handlebars.compile(source);
            const context = {towns};
            const html = template(context);
            $('#root').html(html);
        }
    });
}