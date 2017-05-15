const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
let port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

let numClients = {};

io.on('connection', (socket) => {
  console.log('new user connected');
  socket.on('join', (room, callback) => {
    if (numClients[room] === undefined) {
      numClients[room] = 1;
    } else if (numClients[room] < 4) {
      numClients[room] += 1;
    } else {
      return callback(true);
    }
    socket.join(room);
    socket.emit('newMessage', 'welcome, you');
    socket.broadcast.to(room).emit('newMessage', 'new user is here');
    io.to(room).emit('newMessage', 'here are all the users' + numClients[room]);
    callback(false);
  });


  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

server.listen(port, () => {
  console.log('server is up on ' + port );
});
