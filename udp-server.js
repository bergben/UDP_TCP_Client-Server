var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

function sendBack(message, address, port){
    if(message > 100){
        return;
    }
    server.send(message.toString(), 0, message.toString().length, port, address);
}

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    sendBack(parseInt(message)+1, remote.address, remote.port);
    console.log(remote.address + ':' + remote.port +' - ' + message);
});


server.bind(PORT, HOST);