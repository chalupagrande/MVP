(function(){
  window.signup = {};

  signup.controller = function () {
    var ctrl = this;

    ctrl.send = function(a){
      a.preventDefault()
      var username = a.target.children.username_input.value
      var password = a.target.children.password_input.value

      console.log(username)
      // You might want to sanitize your inputs. 
      m.request({
        method: 'GET',
        url: '/signup/'+ username
      }).then(function(result){
        console.log("the result" ,result.body)

        var data = {username : username, password : password}
        data = JSON.stringify(data);
        m.request({
          method: 'POST',
          url: '/signup', //make sure your url is relative to your localhost. DO NOT INCLUDE LOCAL HOST
          data : data,  //when sending json, the server is expecting json. use parser.json()
          // background: true //prevents a request from affecting redrawing
        }).then(m.route('/login'))

      })
    }// end send
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