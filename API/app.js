var config = require("config.json")("./config.json");
var express = require("express");
var app = express();

var server = app.listen(config.port, function () {
  console.log('Server at http://%s:%s', config.host, config.port);
});