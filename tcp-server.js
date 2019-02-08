// require is a sort of dependency injection
var net = require('net');
var helpers = require('./helpers.js'); // imports our helper.js
var config = require('./config.js'); // imports our config.js

var server = net.createServer();


server.listen(config.RUN_SERVER_AT_PORT, config.RUN_SERVER_AT_ADDRESS);
server.on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    sock.on('data', function(data){
        console.log('Server received: ' +data);
        sock.write((parseInt(data)+1).toString());
    })
});
