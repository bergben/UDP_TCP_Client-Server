/**  
 * This is where you would change the connection from local to remote
 * If you run both your client and server locally you can simply set
 * 
    RUN_SERVER_AT_PORT: 33333,
    RUN_SERVER_AT_ADDRESS: '127.0.0.1', // IP Address where your server should run at
    CONNECT_CLIENT_TO_SERVER_AT_PORT: 33333,
    CONNECT_CLIENT_TO_SERVER_AT_ADDRESS: '127.0.0.1' // IP Address to which the server runs at and which you would like to communicate with

*/
module.exports = { // needed for require DI import to work
    RUN_SERVER_AT_PORT: 33333,
    RUN_SERVER_AT_ADDRESS: '127.0.0.1', // IP Address where your server should run at
    CONNECT_CLIENT_TO_SERVER_AT_PORT: 33333,
    CONNECT_CLIENT_TO_SERVER_AT_ADDRESS: '127.0.0.1' // IP Address to which the server runs at and which you would like to communicate with
}