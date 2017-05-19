const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const session = require('express-session');

const publicPath = path.join(__dirname, '../public');
let port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

let {gameList, alertJoin, findAndRejoin, handleJoin} = require('./utils/helpers/joinGameHelpers.js');

let sessionMiddleware = session({
    secret: "keyboard cat"
});

app.use(sessionMiddleware);
app.use(express.static(publicPath));

io.use((socket, next) => {
  sessionMiddleware(socket.request, socket.request.res, next);
});

io.on('connection', (socket) => {
  findAndRejoin(io, socket);

  socket.on('join', (params, callback) => {
    handleJoin(io, socket, params, callback);
  });

  socket.on('getGames', (callback) => {
    return callback(gameList.games);
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

server.listen(port, () => {
  console.log('server is up on ' + port );
});
