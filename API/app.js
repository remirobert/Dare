var config = require("config.json")("./config.json");
var express = require("express");
var app = express();

var mongoose = require('mongoose');
mongoose.connect(config.mongodb.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Mongodb database connected at ', config.mongodb.url);  
});

var server = app.listen(config.port, function () {
  console.log('Server at http://%s:%s', config.host, config.port);
});