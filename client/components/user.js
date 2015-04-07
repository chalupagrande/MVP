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
          console.log("Setting to:", window.ratings)
        }else{
          console.log(x.error);
        }
      })
    }
    ctrl.send = function(a){
      //REMEBER TO PREVENT DEFAULT
      a.preventDefault()
      var rating = a.target.children.rating_input.value;
      console.log("Pushing:", rating)
      window.ratings.push(rating*1);
      //sanitize inputs!!
      var data = {rating : rating}
      m.request({
        method: 'POST',
        url: '/user/'+ctrl.id,
        data: data
      })
      .then(function(x){
        if(x.success){
          // location.reload()
        }else{
          console.log(x.error);
        }
      })


    }

   ctrl.fetchRatings(ctrl.id);
  }

  user.view = function (ctrl) {

    return m('div', {class : 'wrap'},[
        m('h1', 'Welcome ' + ctrl.id +","),
        m('p', "On a scale between 1-10, how are you feeling today?"),
        m('form', { class : 'rating-form', onsubmit : ctrl.send }, [
          m('input', {
            type : 'text', 
            name : 'rating_input',
            placeholder : 'rating' 
          }, 'Rating'),

          m('input', {type : 'submit'}, 'Submit'),

          ]), // End Form
        m('h3', 'Here are your ratings'),
        // m('ul', populate()),
        //render user specific content. 
        m('.the-chart', {config: mountChart.papp(window.ratings) })

      ]);//END WRAP 
  }

  function mountChart (data, elem, hasInitialized, context) {
    if (hasInitialized) {
      context.chart.series[0].setData(data, true)
    }
    else {
      context.chart = new Highcharts.Chart({
        chart: {
          renderTo: elem,
        },

        title:{
          text: "Your Emotions"
        },

        series: [{
          data: data
          // data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
      });
      // window.chart = context.chart
      // window.data = data
    }
  }// END MOUNT CHART

})()