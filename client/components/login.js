(function(){
  window.login = {};

  login.controller = function () {

    var ctrl = this;

    ctrl.send = function(a){
      a.preventDefault()
      var username = a.target.children.username_input.value
      var password = a.target.children.password_input.value

      var data = {username : username, password : password}


      m.request({
        method: 'POST',
        url: '/login',
        data: data
      })
      .then( function(x){
        console.log(x.success)
        if(x.success){
          m.route('/user/' + x.username);
        }else{
          console.log('Sorry:', x.error)
          m.route('/signup')
        }
      })
    }

  }

  login.view = function (ctrl) {


    return m('.login-wrap', [
      m('h1','Login'),// header

      m('form', { class : 'login-form', onsubmit : ctrl.send}, [
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