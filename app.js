var express = require('express');
var bodyParser = require('body-parser');
var eratosthenes = require('./js/primes.js');
var app = express();

app.use(express.static('public'));
app.use(bodyParser());

app.post('/count', function(request, response) {
  console.log(request.body.number);
  var primes = new eratosthenes();
  var start = new Date().getTime();
  primeNumbers = primes.Count(request.body.number);
  console.log(primeNumbers);
  var end = new Date().getTime();
  var time = end - start;
  console.log("<p>Time elapsed: " + time);
  var results = {};
  results['numbers'] = primeNumbers;
  results['timeElapsed'] = time;
  response.json(results);
});

app.get('/main', function(req, res) {
 res.sendFile('public/index.html', {
  root: __dirname
 });
});

var server = app.listen(3000, function() {
 var host = server.address().address;
 var port = server.address().port;
});
