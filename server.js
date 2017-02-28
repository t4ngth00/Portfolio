// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Set port either heroku or local
app.set('port', (process.env.PORT || 5000));


app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(__dirname + '/views'));

// Root page will be the index page (views/pages/index)
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/labs', function(req, res) {
  res.render('pages/labs');
});

app.get('/apps', function(req, res) {
  res.render('pages/apps');
});

app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

// for running applications
app.get('/apps/personlist', function (req, res) {
  res.render('pages/personlist/personlist');
});

app.get('/apps/linedraw', function (req, res) {
  res.render('pages/linedraw/linedraw');
});

app.get('/apps/canvasgame', function (req, res) {
  res.render('pages/canvasgame/canvasgame');
});

app.get('/apps/photogallery', function (req, res) {
  res.render('pages/photogallery/FlickrPhotoWall');
});

// launch ======================================================================
app.listen(app.get('port'), function(){
	console.log('Food ordering server application is running on port: ' + app.get('port'));
});
