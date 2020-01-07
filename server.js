//Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// Serve only the static files form the dist directory
// app.use(express.static('./dist/angular-youflix-videoapp'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname,'/dist/angular-youflix-videoapp/index.html'));
// });

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

var fs = require('fs');
var http = require("https");
var express = require('express');
var app = express();
var path = require('path');
var http = require("http");
var url = require("url");
var req = require('request')
var pem = require('pem');
var cors = require("cors");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, '/dist/angular-youflix-videoapp/index.html')));

app.listen(process.env.PORT || 8080);

app.options('*', cors()); 

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
    next();
});

app.get('/', function (req, res) { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    contents = fs.readFileSync("sliderImages.json", "utf8");
    console.log(path.join(__dirname, '/sliderImages.json'));
    res.end(contents);
 });