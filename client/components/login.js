(function(){
  window.login = {};

  login.controller = function () {

  }

  login.view = function (ctrl) {


    return m('.login-wrap', [
      m('h1','Login'),// header

      m('form', { class : 'login-form'}, [
        m('input', {
          type : 'text', 
          name : 'username-input',
          placeholder : 'username' 
        }, 'Username'),

        m('input', {
          type : 'text', 
          name : 'password-input',
          placeholder : 'password'
        }, 'Password'),

        m('input', {type : 'submit'}, 'Submit'),

        ]), // End Form
      
      m('a', { href : "#/signup"}, "Dont have an account yet?")
    ]);// END Login Wrap


  }

})()