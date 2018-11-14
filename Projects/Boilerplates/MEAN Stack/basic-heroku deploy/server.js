var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var logger = require('morgan');
app.use(logger('dev')); // dev format (:method :url :status :response-time ms - :res[content-length])

var parseString = require('xml2js').parseString;
var util = require('util');
var path = require('path');

/*
app.use(favicon(__dirname + '/public/img/favicon.ico'));
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.set('view engine','pug');


// initialize routes
var yah = require('./routes/yah');
app.use('/yah',yah);

//https://nodejs.org/api/http.html#http_http_request_options_callback

/*
var server = app.listen(3000, function() {
    var address = server.address().address;
    var port = server.address().port;
    var family = server.address().family;

    console.log("app.listen on port 3000, http://%s%s%s", family, address, port);
});
*/

var server = app.listen(process.env.PORT || '3000');