var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = new Buffer('1');

var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
});

client.on('message', function (message, remote) {
    sendBack(parseInt(message)+1, remote.address, remote.port);
    console.log(remote.address + ':' + remote.port +' - ' + message);
});

function sendBack(message, address, port){
    if(message > 100){
        client.close();
        return;
    }
    client.send(message.toString(), 0, message.toString().length, port, address);
}