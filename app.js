var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//db object setup
mongoose.set('debug', true);
var dbURL = 'mongodb+srv://rsa:rsa123@cluster0.qlhxx.mongodb.net/btm?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true , useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Setting up routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//App init
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Set up middleware before routing in request handling chain
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Set up middleware for routing after other middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
