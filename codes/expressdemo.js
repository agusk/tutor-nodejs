var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.send('node.js home.');
});

app.get('/hello', function(req, res) {
    res.send('Hello World!');
});

app.listen(8070);
console.log('Server was started');