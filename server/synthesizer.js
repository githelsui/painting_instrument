var socket = io();
 
socket.on('data', function(data){
    console.log(data);
    document.getElementById('title').innerHTML = data;
}); 