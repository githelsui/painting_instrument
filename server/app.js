var path = require('path');
var http = require('http');
var express = require('express');
var fs = require('fs');
var SerialPort = require("serialport");

const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiters: '\r\n'
});

var port = new SerialPort('/dev/cu.SLAB_USBtoUART', {
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

var express_app = express();
var app = http.createServer(express_app);
express_app.use(express.static(path.join(__dirname, 'public')));


var io = require('socket.io').listen(app);

//when connection between port + server happens
io.on('connection', function(data){
    console.log('Node.js is listening');
});

//when we receive data from port
parser.on('data', function(data){
    console.log(data);
    io.emit('data', data); //send data from port to server
});


app.listen(3000);