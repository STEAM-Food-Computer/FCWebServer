'use strict';
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000; //PORT NUMBER FOR SOCKET

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

io.on('connect', function(socket){
  console.log('someone connected from: ' + socket.handshake.address);

    //listens for client data
    socket.on('sendDataToServer', function(info){
        io.emit('sendDataToWebPage', info);
    });
});



http.listen(port, function(){
    console.log('listening on *:3000');
});
