(function(){
  window.login = {};

  login.controller = function () {

    var ctrl = this;

    ctrl.send = function(a, b){
      m.request({
        method: 'POST',
        url: '/signup'
      })
      .then(
        console.log("Log in form sent")
      )
    }

  }

  login.view = function (ctrl) {


    return m('.login-wrap', [
      m('h1','Login'),// header

      m('form', { class : 'login-form'}, [
        m('input', {
          type : 'text', 
          name : 'username_input',
          placeholder : 'username' 
        }, 'Username'),

        m('input', {
          type : 'password', 
          name : 'password_input',
          placeholder : 'password'
        }, 'Password'),

        m('input', {type : 'submit'}, 'Submit'),

        ]), // End Form

      m('a', { href : "#/signup"}, "Dont have an account yet?")
    ]);// END Login Wrap


  }

})()