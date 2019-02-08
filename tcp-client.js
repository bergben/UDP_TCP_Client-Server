var net = require('net');
var config = require('./config.js'); // imports our config.js
var client = new net.Socket();

client.connect(config.CONNECT_CLIENT_TO_SERVER_AT_PORT, config.CONNECT_CLIENT_TO_SERVER_AT_ADDRESS, function() {

    console.log('CONNECTED TO: ' + config.CONNECT_CLIENT_TO_SERVER_AT_PORT + ':' + config.CONNECT_CLIENT_TO_SERVER_AT_ADDRESS);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 
    client.write('1');
});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
    
    console.log('Received: ' + data);
    if(parseInt(data) < 100) {
        client.write((parseInt(data)+1).toString());
    }
    else {
        client.destroy();
    }
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});