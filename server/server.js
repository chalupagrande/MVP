var express = require('express');
var app = express();

module.exports.app = app;

// basic routing
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/signin', function (req, res) {
  res.send('You can Sign IN here....');
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});