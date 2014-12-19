var http = require('http');
var port = 8122;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hallo Indonesia\n');
}).listen(port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + String(port) +'/');