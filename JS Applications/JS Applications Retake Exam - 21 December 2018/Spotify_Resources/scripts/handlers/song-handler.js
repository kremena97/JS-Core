handlers.getAllSongs = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let userId = sessionStorage.getItem('_id');
    songService.listAllSongs().then((res)=>{
        ctx.songs = res;
        ctx.songs.forEach(x => {
            x.isCreator = x._acl.creator == userId;
        });
        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/allSongs.hbs');
        });
    });

};

handlers.getMySongs = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let user_id = sessionStorage.getItem('_id');
    songService.listMySongs(user_id).then((res)=>{
        ctx.mySongs = res;
        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/mySongs.hbs');
        });
    });

};

handlers.getCreateSong = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/createSong.hbs');
    });
};

handlers.createSong = function (ctx) {

    let data = {
        "title": ctx.params.title,
        "artist": ctx.params.artist,
        "imageURL": ctx.params.imageURL,
        "likes": 0,
        "listened": 0

    };
    songService.createNewSong(data);
    notify.showInfo('Song created successfully.');
    this.redirect('#/allSongs');
};

handlers.likeSong =  function (ctx) {

     songService.like(ctx.params.id).then(() => {
        notify.showInfo('Liked!');
        ctx.redirect('#/allSongs');
    }).catch((err)=> {notify.showError(err.message)})
};

handlers.listenSong = function (ctx) {

    songService.listen(ctx.params.id).then(()=>{
      notify.showInfo('Listened!');
      window.history.back();
  }).catch((err)=> {notify.showError(err.message)})
};

handlers.removeSong = function (ctx) {

    songService.deleteSong(ctx.params.id).then(()=>{
        notify.showInfo('Successfully deleted song!');
        window.history.back();
    }).catch((err)=> {notify.showError(err.message)})
};