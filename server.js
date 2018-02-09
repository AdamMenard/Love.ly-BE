// add .gitignore – do not ever commit node_modules







/****************
 * REQUIREMENTS *
 ****************/
var express = require('express');
var app = express();
var router = require('./config/routes.js');

var bodyParser = require('body-parser');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the `/public` directory
app.use(express.static('public'));
app.use(bodyParser.json());

// localhost:8080/images/puppy.jpg
// <img src="/images/puppy.jpg" />


/************
 * DATABASE *
 ************/

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE");
  next();
});
app.use(router);


/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 8080, function () {
  console.log('Express server is up and running on https://localhost:8080/');
});
