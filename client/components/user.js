(function(){
  window.user = {};

  user.controller = function () {
    var ctrl = this;
    ctrl.id = m.route.param("username")

  }

  user.view = function (ctrl) {

    return m('h1', 'you made it')
  }

})()