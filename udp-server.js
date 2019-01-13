// require is a sort of dependency injection

var dgram = require('dgram'); // pre built in functionality from node.js
var helpers = require('./helpers.js'); // imports our helper.js
var config = require('./config.js'); // imports our config.js

var server = dgram.createSocket('udp4'); // create a UDP socket

helpers.attachAnswerListener(server, true); // attach the listener for messages

startServer();

function startServer() {
    // this following listener is not really necessary, it's just to log that the server is up and listening to the console once that event fires
    server.on('listening', function () {
        var address = server.address();
        console.log('UDP Server listening on ' + address.address + ":" + address.port);
    });

    // this is where we actually start the server:
    server.bind(config.RUN_SERVER_AT_PORT, config.RUN_SERVER_AT_ADDRESS);
}