var express = require('express');
var app = express();

// https://github.com/senchalabs/connect#middleware
// install middleware
// npm install body-parser

var parser = require('body-parser');
var urlcodepar = parser.urlencoded({ extended: false });


app.get('/', function(req, res) {
    res.json({status:"ok",message:"home"});

});
app.get('/contact/getall', function(req, res) {
    res.json({status:"ok",message:"get all contacts"});

});
app.post('/contact/save', urlcodepar,function(req, res) {
    res.json({status:"ok",message:"contact item"});

});


app.listen(8070);
console.log('Server was started');