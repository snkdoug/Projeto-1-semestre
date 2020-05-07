//import do express
var express = require('express');
// cria um objeto do express
var app = express();

//ponto de acesso: endpoint
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});