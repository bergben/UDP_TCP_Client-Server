/**  
 * creates a datagramPacket (for simulating a closer implementation to the Java way)
 * @param message primitive type of message which is going to be converted to a string and then Buffer
 * @param address the IP address to which the message should be sent to
 * @param port the port at the given IP address
*/
function createDatagramPacket(message, address, port) {
    var messageBuffer = new Buffer(message.toString());
    return {
        buffer: messageBuffer,
        bufferLength: messageBuffer.length,
        address: address,
        port: port
    };
}

 /**  
 * Sends a message using a 
 * @param socket  socket instance
 * @param datagramPacket contains all the information needed about message, port, address
*/
function sendMessage(socket, datagramPacket) {
    socket.send(datagramPacket.buffer, 0, datagramPacket.bufferLength, datagramPacket.port, datagramPacket.address, function(err, bytes) {
        if (err) throw err;
        console.log('UDP message ' + datagramPacket.buffer.toString() + ' sent to ' + datagramPacket.address +':'+  datagramPacket.port);
    });
}

/**  
 * attaches a listener to a socket and answers when the socket receives a message up until the count of 100
 * that way the message is going to be sent between server and client 100 times
 * @param socket socket instance
 * @param isServer boolean flag -> if the socket is the server we do not want to close it when we reach the count of 100
 *                                 the server should continue to listen for further connections and messages
*/
function attachAnswerListener(socket, isServer) {
    socket.on('message', function (message, remote) { // attaches listener on socket with callback function when a message is received
        console.log('UDP message received:' + message + ' from: ' + remote.address + ':' + remote.port);

        var currentCounter = parseInt(message)+1; // increment counter
        if (currentCounter < 100) {
            // send Message with counter incremented by 1
            var datagramPacket = createDatagramPacket(currentCounter, remote.address, remote.port);
            sendMessage(socket, datagramPacket);
        }
        else if(!isServer) {
            // socket is a client and message was sent 100 times + => close the socket
            socket.close();
        }
    });
}

module.exports = {  // needed for require DI import to work
    createDatagramPacket: createDatagramPacket,
    sendMessage: sendMessage,
    attachAnswerListener: attachAnswerListener,
};