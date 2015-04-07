var express = require('express');
var app = express();
var parser = require('body-parser');
var db = require('./db/connection.js').connection

module.exports.app = app;


//We need body parser middleware
app.use(parser.json());
app.use(express.static('client'));

//~~~~~~ REFACTOR INTO MODEL ~~~~~~~

app.post('/login', function(req, res){
  var un = req.body.username;
  var pw = req.body.password
  if(usernameDoesntExist(un)){
    res.send(JSON.stringify({success: true, error: 'Invalid Username'}))
  }else{
    debugger;
    res.send(JSON.stringify({success: false, error: 'Signning IN'}))
  }

})

app.post('/signup', function(req, res){
 
  var un = req.body.username;
  var pw = req.body.password
  if(usernameDoesntExist(un)){
    db.query("INSERT INTO users (username, password) VALUES (? , ?)",[un,pw], function(err, results){
      //You must send back a Object -otherwise the .then client side wont run
      res.send(JSON.stringify({success: true}))
    }) 
  }else{
    res.send(JSON.stringify({success: false, error: 'Username taken.'}))
  }
})

app.get('/user/*', function(req, res){
  // res.param(name)
  // var un = req.url.slice(8)
  // db.query("SELECT * FROM users WHERE username = ?",[un], function(err, results){
  //   console.log("the results are:", results.length)
  //   if(results.length === 0){
  //     res.send("bad request")
  //   }else{
  //     res.send('okay')
  //   }
  // })
  debugger;
  
})


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


///~~~~~~~~~~~ HELPER METHODS ~~~~~~~~~~~

var usernameDoesntExist = function(username){
  //THIS IS ASYNCHRONOUS
  return db.query("SELECT * FROM users WHERE username = ?", [username], function(err, data){
    if(data.length){
      return true;
    }else{
      return false;
    }
  })  
}