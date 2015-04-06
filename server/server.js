var express = require('express');
var app = express();
var parser = require('body-parser');

module.exports.app = app;


//We need body parser middleware
app.use(parser.json());
app.use(express.static('client'));

app.post('/login', function(req, res){
  debugger;
  var obj = JSON.parse(req.body);
  console.log(obj);
  res.send("Logging in")

})

app.post('/signup', function(req, res){
  console.log(req.body)
  // var obj = JSON.parse(req.body);
  // console.log(obj);

  // JSON.parse()
  res.send("Singed Up")

})

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});