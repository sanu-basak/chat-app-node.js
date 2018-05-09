const express = require('express');
const socket  = require('socket.io');
const cors    = require('cors');

const app = express();
app.use(express.static('public'));


const server = app.listen(4000 , () => console.log('Listeining at http://localhost:4000'));

const io = socket(server);
io.on('connection', socket => {
    console.log('Socket Connected with ID: ' + socket.id);
    socket.on('chat-message',function(data){
         console.log(data);
         io.sockets.emit('chat-message',data);
    });
 });