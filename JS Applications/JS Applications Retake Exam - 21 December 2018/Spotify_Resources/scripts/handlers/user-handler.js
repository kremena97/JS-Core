handlers.getRegister = function (ctx) {
  ctx.loadPartials({
    header: 'templates/common/header.hbs',
    footer: 'templates/common/footer.hbs'
  }).then(function () {
    this.partial('templates/register.hbs');
  });
};

handlers.getLogin = function (ctx) {
  ctx.loadPartials({
    header: 'templates/common/header.hbs',
    footer: 'templates/common/footer.hbs'
  }).then(function () {
    this.partial('templates/login.hbs');
  });
};

handlers.registerUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;
  
  if (username.length < 3){
    notify.showError('The username should be at least 3 characters long');
    return;
  }else if(password.length < 6){
    notify.showError('The password should be at least 6 characters long');
    return;
  }
  userService.register(username, password).then((res) => {
    userService.saveSession(res);
    notify.showInfo('User registered successfully');
    ctx.redirect('#/home');
  }).catch(function (err) {
    notify.showError(err.responseJSON.description);
  });
};

handlers.logoutUser = function (ctx) {
  userService.logout().then(() => {
    sessionStorage.clear();
    notify.showInfo('User logged out successfully');
    ctx.redirect('#/home');
  })
};

handlers.loginUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;
  userService.login(username, password).then((res) => {
    userService.saveSession(res);
    notify.showInfo('User logged in successfully');
    ctx.redirect('#/home');
  }).catch(function (err) {
    notify.showError(err.responseJSON.description);
  });
};