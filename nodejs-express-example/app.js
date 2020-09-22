var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

const BASE_PATH = '/api/v1';

var app = express();

//Add logging fwk
app.use(logger(':method :url :status :res[content-length] - :response-time ms'));

//Add swagger doc
app.use('/docs', function(req, res, next){
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  next();
}, swaggerUi.serve, swaggerUi.setup());

//Add Apis routes
app.use(BASE_PATH + '/users', require('./routes/users'));
app.use(BASE_PATH + '/system', require('./routes/system'));

//Configure express json and urlencoding
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = normalizePort(process.env.PORT || '3000');


app.listen(port, () => {
  console.debug('App listening on :'+ port);
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


module.exports = app;
