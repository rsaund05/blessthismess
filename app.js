var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var session = require('express-session');
var path = require('path');
var okta = require('@okta/okta-sdk-nodejs');
var ExpressOIDC = require('@okta/oidc-middleware').ExpressOIDC;

var orgUrl = 'https://dev-18496280.okta.com'; //save for later
var clientID = '0oaa00qfcZG25RQ225d6';
var apiToken = '00W2yWrfc3kfSQ8dBzr79tW7N8bWV1Aqm_19zHu_eC';

//db object setup
mongoose.set('debug', true);
var dbURL = 'mongodb+srv://rsa:rsa123@cluster0.qlhxx.mongodb.net/btm?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true , useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Setting up routers
const dashboardRouter = require('./routes/dashboard');
const publicRouter = require('./routes/public');


//App obj init
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Set up middleware before routing in request handling chain
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'sausage-slaps',
	resave: true,
	saveUninititalized: false
}));

//Set up middleware for routing after other middleware
app.use('/', publicRouter);
app.use('/dashboard', dashboardRouter);

//Catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

//Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

  //Render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
