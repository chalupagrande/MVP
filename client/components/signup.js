(function(){
  window.signup = {};

  signup.controller = function () {

  }

  signup.view = function (ctrl) {


    return m('.signup-wrap', [
      m('h1', 'Sign Up'),
      m('form', { class : 'signup-form'}, [
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

        ]),
    ])
  }

})()