var http = require('http');
var fs = require('fs');

var index = fs.readFileSync('index.html');

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

parser.on('data', function(data){
    console.log(data);
    // io.emit('data', data);
});

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(index);
});

// var io = require('socket.io').applylist(app);

// io.on('connection', function(data){
//     console.log('Node.js is listening');

// });

app.listen(3000);