//Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static('./dist/angular-youflix-videoapp'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname,'/dist/angular-youflix-videoapp/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

var express = require('express')
var cors = require('cors')
var app = express()
var path = require('path');

app.use(cors())

app.get('/*', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
res.sendFile(path.join(__dirname,'/dist/angular-youflix-videoapp/index.html'));

})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
