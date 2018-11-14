// yah.js

var express = require('express');
var router = express.Router();
var app = express();
var parseString = require('xml2js').parseString;
var util = require('util');
var moment = require('moment');



var config = require('../config_bartapi');

var http = require('http');


router.route('/tripDetailsDepart')
    .get(function(req,res){
                      
        var vParsed = '';     
        
        var depart_options = {
        };
        
        var depart_callback = function (response){
            
            response.on('data', function(chunk){
                vParsed += chunk;
            });
            
            response.on('end', function(){
            });
        };
    http.request(depart_options, depart_callback).end();
});

module.exports = router;