(function(){
  window.user = {};
  //Could probably abstract out the ratings component
  window.ratings = [];

  user.controller = function () {
    var ctrl = this;
    ctrl.id = m.route.param("username")

    ctrl.fetchRatings = function(un){
      m.request({
        method: 'GET',
        url: '/user/'+ctrl.id,
      })
      .then(function(x){
        if(x.success){
          console.log(x.data);
          //server is serving an array of objects with the prop of rating.
          var pureRatings = [];
          for(var i =0; i < x.data.length; i++){
            pureRatings.push(x.data[i].rating)
          }
          window.ratings = pureRatings;
        }else{
          console.log(x.error);
        }
      })
    }

    ctrl.render = function(){
      var r = window.ratings
      var list = []
      for(var i = 0; i < r.length; i++){
        list.push(m('li', r[i].toString()))
      }

    }

   ctrl.fetchRatings(ctrl.id);
  }

  user.view = function (ctrl) {

    return m('div', {class : 'wrap'},[
        m('h1', 'Welcome ' + ctrl.id +","),
        m('h3', 'Here are your ratings'),
        m('ul', populate())


        //render user specific content. 

      ]);//END WRAP 

    function populate(){
      var r = window.ratings
      var list = []
      for(var i = 0; i < r.length; i++){
        list.push(m('li', r[i].toString()))
      }
      return list;
    }

  }

})()