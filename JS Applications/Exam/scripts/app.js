const handlers = {};

$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        // home page routes
        this.get('/index.html', handlers.getHome);
        this.get('/', handlers.getHome);
        this.get('#/home', handlers.getHome);

        // user routes
        this.get('#/register', handlers.getRegister);
        this.get('#/login', handlers.getLogin);

        this.post('#/register', handlers.registerUser);
        this.post('#/login', handlers.loginUser);
        this.get('#/logout', handlers.logoutUser);

        this.get('#/cinema', handlers.getCinema);
        this.get('#/addMovie', handlers.getCreateMovie);
        this.post('#/addMovie', handlers.createMovie);

        this.get('#/buyTicket/:id', handlers.buyTicket);
        this.get('#/detailsMovie/:id', handlers.showDetails);
        this.get('#/myMovies', handlers.getMyMovies);

        this.get('#/editMovie/:id', handlers.getEditMovie);
        this.post('#/editMovie/:id', handlers.editMovie);

        this.get('#/deleteMovie/:id', handlers.getDeleteMovie);
        this.post('#/deleteMovie/:id', handlers.deleteMovie);

        this.get('#/search', handlers.searchGenre);

        // ADD YOUR ROUTES HERE
    });
    app.run();
});