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

    // ADD YOUR ROUTES HERE

    this.get('#/allSongs', handlers.getAllSongs);
    this.get('#/mySongs', handlers.getMySongs);
    this.get('#/createSong', handlers.getCreateSong);

    this.post('#/createSong', handlers.createSong);
    this.get('#/like/:id', handlers.likeSong);
    this.get('#/listen/:id', handlers.listenSong);
    this.get('#/remove/:id', handlers.removeSong);

  });
  app.run();
});