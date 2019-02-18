var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRouter= require('./routes/create');
var viewRouter = require('./routes/archive');
var addRouter = require('./routes/add');
var deleteRouter = require('./routes/delete');


var app = express();
// const app = require('express')()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/users', usersRouter);
app.use('/create',createRouter);
app.use('/archive', viewRouter);
app.use('/add', addRouter);
app.use('/delete', deleteRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// the pages
// displayed in the array
app.use('/', routes[0]);
app.use('/create', routes[1]);
app.use('/sign_in', routes[2]);
app.use('/edit', routes[3]);
// app.use('/view', routes[4]);
app.use('/register', routes[5]);
app.use('/delete', routes[6]);
app.use('/sign_out', routes[7]);
app.use('/archive', routes[8]);
app.use('/contact', routes[9]);
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //bodyParser Middleware
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//this is not needed if you have bodyParser
//express middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(process.env.PORT || 3000);
