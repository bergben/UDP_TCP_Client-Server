// require is a sort of dependency injection

var dgram = require('dgram'); // pre built in functionality from node.js
var helpers = require('./helpers.js'); // imports our helper.js
var config = require('./config.js'); // imports our config.js

var client = dgram.createSocket('udp4'); // create a UDP socket

helpers.attachAnswerListener(client, false); // attach the listener for messages
sendInitialMessage(); // send the initial message to the server

function sendInitialMessage() {
    var datagramPacket = helpers.createDatagramPacket(1, config.CONNECT_CLIENT_TO_SERVER_AT_ADDRESS, config.CONNECT_CLIENT_TO_SERVER_AT_PORT);
    helpers.sendMessage(client, datagramPacket);
}