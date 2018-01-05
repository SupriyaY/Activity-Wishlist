require('dotenv').config();
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();


const userController = require('./controllers/userController')
app.use('/users', userController)
// const citiesController = require('./controllers/citiesController')
// app.use('users/:userId/cities', citiesController)
// const activitiesController = require('./controllers/activitiesController')
// app.use('/users/:userId/cities/:citiesId/activities', activitiesController)

//auto redirect to the users page on load
// app.get('/', (request, response) => {
// response.redirect('/users')
// })




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Mongo connection set-up
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
  console.log('Mongoose has connected to MongoDB!')
})

mongoose.connection.on('error', (error) => {
  console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
  process.exit(-1)
})

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(request, response, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, request, response, next) {
  // set locals, only providing error in development
  response.locals.message = err.message;
  response.locals.error = request.app.get('env') === 'development' ? err : {};

  // render the error page
  response.status(err.status || 500);
  response.render('error');
});

module.exports = app;
