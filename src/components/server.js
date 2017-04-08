var Hapi = require('hapi');
var mongoose = require("mongoose");

var server = new Hapi.Server();
server.connection({ port: 3000 });
