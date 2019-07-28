handlers.getCinema = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    movieService.getAllMovies().then(res => {
        ctx.movies = res.sort((a,b)=> b.tickets - a.tickets);
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/cinema.hbs');
        })
    }).catch(err=>{
        notifications.showError(err.responseJSON.description);
        ctx.redirect('#/home');
    });
};

handlers.getCreateMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/addMovie.hbs');
    });
};

handlers.createMovie = function (ctx) {
    let title = ctx.params.title;
    let imageURL = ctx.params.imageUrl;
    let description = ctx.params.description;
    let genres = ctx.params.genres.split(' ');
    let tickets = Number(ctx.params.tickets);
    
    if (title.length < 6){
        notifications.showError('The title should be at least 6 characters long.');
        return;
    }
    if (description.length < 10){
        notifications.showError('The description should be at least 10 characters long.');
        return;
    }
    if (typeof tickets !=='number'){
        notifications.showError('The available tickets should be a number.');
        return;
    }

    movieService.addMovie(title, description, imageURL, genres, tickets).then(() => {
        notifications.showSuccess('Movie created successfully.');
        ctx.redirect('#/home');
    }).catch(err => {
        notifications.showError(err.responseJSON.description);
        ctx.redirect('#/home');
    });
};

handlers.showDetails = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let movieId = ctx.params.id;
    movieService.getMovieById(movieId).then((res)=>{
        ctx.id = movieId;
        ctx.title = res.title;
        ctx.imageUrl = res.imageURL;
        ctx.description = res.description;
        ctx.genres = res.genres;
        ctx.tickets = res.tickets;
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/detailsMovie.hbs');
        })
    }).catch(err=>{
        notifications.showError(err.responseJSON.description);
        ctx.redirect('#/cinema');
    });
};

handlers.buyTicket = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let movieId = ctx.params.id;
    movieService.buyTicket(movieId).then((res)=>{
        if (res == 'No available tickets!') {
            notifications.showError(res);
            window.history.back();
        }else{
            notifications.showSuccess(`Successfully bought ticket for ${res.title}!`);
            window.history.back();
        }
    }).catch(err=>{
        notifications.showError(err.responseJSON.description);
        ctx.redirect('#/cinema');
    });
};

handlers.getMyMovies = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.userId = sessionStorage.getItem('userId');

    movieService.myMovies(ctx.userId).then(res => {
        ctx.movies = res.sort((a,b)=> b.tickets - a.tickets);;
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/myMovies.hbs');
        })
    }).catch(err=>{
        notifications.showError(err.responseJSON.description);
        ctx.redirect('#/home');
    });
};

handlers.getEditMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let movieId = ctx.params.id;
    movieService.getMovieById(movieId).then((res)=>{
        ctx.id = movieId;
        ctx.title = res.title;
        ctx.imageUrl = res.imageURL;
        ctx.description = res.description;
        ctx.genres = res.genres;
        ctx.tickets = res.tickets;
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/editMovie.hbs');
        })
    }).catch(err=>{
        notifications.showError(err.responseJSON.description);
        ctx.redirect(window.history.back());
    });
};

handlers.editMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let movie = {
        "title": ctx.params.title,
        "description": ctx.params.description,
        "imageURL":ctx.params.imageUrl,
        "genres": ctx.params.genres,
        "tickets": Number(ctx.params.tickets)

    };
    let movieId = ctx.params.id;

    movieService.edit(movie, movieId).then((res)=>{
        notifications.showSuccess(`Successfully edited movie!`);
        ctx.redirect('#/myMovies');
    }).catch(err=>{
        notifications.showError(err.responseJSON.description);
        ctx.redirect('#/cinema');
    });
};

handlers.getDeleteMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let movieId = ctx.params.id;
    movieService.getMovieById(movieId).then((res)=>{
        ctx.id = movieId;
        ctx.title = res.title;
        ctx.imageUrl = res.imageURL;
        ctx.description = res.description;
        ctx.genres = res.genres;
        ctx.tickets = res.tickets;
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/deleteMovie.hbs');
        })
    }).catch(err=>{
        notifications.showError(err.responseJSON.description);
        ctx.redirect(window.history.back());
    });
};

handlers.deleteMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let movieId = ctx.params.id;

    movieService.deleteMovie(movieId).then((res)=>{
        notifications.showSuccess(`Movie removed successfully!`);
        ctx.redirect('#/home');
    }).catch(err=>{
        notifications.showError(err.responseJSON.description);
        ctx.redirect('#/cinema');
    });
};

handlers.searchGenre = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    movieService.getAllMovies().then(res => {
        console.log(res);
        ctx.movies = res.filter(x=>x.genres.includes(ctx.params.search));
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/cinema.hbs');
        })
    }).catch(err=>{
        notifications.showError(err.responseJSON.description);
        ctx.redirect('#/home');
    });
};