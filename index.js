const net				= require('net');
const gt06 = require('./gt06n.js');

const server = net.createServer((connection) => {
    connection.setEncoding('hex');
    connection.on('data', (data) => {
        // console.log(data);
        let result = gt06.vicp(data);        
    });
}).listen(5000);

