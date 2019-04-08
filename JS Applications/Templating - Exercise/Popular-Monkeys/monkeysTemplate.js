$(() => {
   renderMonkeyTemplate();

   async function renderMonkeyTemplate() {
       const source = await $('#monkey-template').html();
       const template = Handlebars.compile(source);
       const context = {monkeys};
       const html = template(context);
       $('.monkeys').html(html);
   }
});

function showInfo(id) {
    $(`#${id}`).toggle();
}