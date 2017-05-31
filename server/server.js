require('./config/config');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const session = require('express-session');

const publicPath = path.join(__dirname, '../public');
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

let { mongoose } = require('./db/mongoose');
let { findAndRejoin, handleJoin } = require('./utils/helpers/joinGameHelpers.js');
let { Player } = require('./utils/models/player.js');
let { Game } = require('./utils/models/game.js');

let sessionMiddleware = session({
    secret: process.env.SESSION_SECRET
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
    Game.find({}).then((games) => {
      return callback(games);
    }, (err) => {
      console.log(err);
    })
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

server.listen(process.env.PORT, () => {
  console.log('server is up on ' + process.env.PORT );
});
