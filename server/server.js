var express = require('express');
var app = express();

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/', express.static(__dirname + '/../build'));

var data = 'I am data';

app.get('/api/data', function(req, res){
  debugger;
  res.send(data);
});

app.listen(8000);
// console.log('listening on localhost:8000');
