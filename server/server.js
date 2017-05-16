const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
let port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

const {GameList} = require('./utils/gameList.js');
const {Game} = require('./utils/game.js');
const {Player} = require('./utils/player.js');

let gameList = new GameList();

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  socket.on('join', (params, callback) => {
    let player = new Player(socket.id, params.playerName, params.game),
        game = gameList.findGame(params.game);

    if (game) {
      if (game.playerCount() == 4) { return callback(true); }
      game.addPlayer(player);
    } else {
      game = new Game(params.game, params.winningScore);
      game.addPlayer(player);
      game.owner = player;
      gameList.addGame(game);
    }

    socket.join(params.game);
    socket.emit('newMessage', gameList);
    socket.broadcast.to(params.game).emit('newMessage', 'new user is here');
    io.to(params.game).emit('newMessage', game);
    callback(false);
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
