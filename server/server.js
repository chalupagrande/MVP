var express = require('express');
var app = express();
var parser = require('body-parser');
var db = require('./db/connection.js').connection

module.exports.app = app;


//We need body parser middleware
app.use(parser.json());
app.use(express.static('client'));

app.post('/login', function(req, res){
  
  res.send("Logging in")

})

app.post('/signup', function(req, res){
  console.log(req.body)

  //refactor into model
  var un = req.body.username;
  var pw = req.body.password
  if(usernameExists(un)){
    db.query("INSERT INTO users (username, password) VALUES (? , ?)",[un,pw], function(err, results){
      
    }) 
  }else{
    resp.send('Username taken.')
  }
})

app.get('/signup/*', function(req, res){
  var un = req.url.slice(8)
  debugger;
  if(usernameExists(un)){
    res.send('okay')
  }else{
    res.send('bad-reques')
  }

  // db.query("SELECT * FROM users WHERE username = ?",[un], function(err, results){
  //   console.log("the results are:", results.length)
  //   if(results.length === 0){
  //     res.send("bad request")
  //   }else{
  //     res.send('okay')
  //   }
  // })
})

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});




///~~~~~~~~~~~ HELPER METHODS ~~~~~~~~~~~

var usernameExists = function(username){
  return db.query("SELECT * FROM users WHERE username = ?", [username], function(err, data){
    if(data.length){
      return true;
    }else{
      return false;
    }
  })  
}