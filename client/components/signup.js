(function(){
  window.signup = {};

  signup.controller = function () {
    var ctrl = this;

    ctrl.send = function(a){
      a.preventDefault()
      var username = a.target.children.username_input.value
      var password = a.target.children.password_input.value
      // You might want to sanitize your inputs. 
      var data = {username : username, password : password}
      // data = JSON.stringify(data);


      m.request({
        method: 'POST',
        url: '/signup',
        data : data
      })
      .then(
        function(resp){
          console.log("THE RESOLKDJHG" ,resp)
        }
      )
    }
  }

  signup.view = function (ctrl) {


    return m('.signup-wrap', [
      m('h1', 'Sign Up'),
      m('form', { class : 'signup-form', onsubmit : ctrl.send }, [
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

        ]),
    ])
  }

})()