const {Player} = require('./../models/player.js');
const {PlayerList} = require('./../models/playerList.js');
const {Game} = require('./../models/game.js');
const {GameList} = require('./../models/gameList.js');

let playerList = new PlayerList(),
    gameList = new GameList();

let alertJoin = (io, socket, game) => {
  socket.emit('newMessage', gameList);
  io.to(game.name).emit('newMessage', game);
}

let findAndRejoin = (io, socket) => {
  let player = playerList.findPlayer(socket.request.session.id);
  if (player) {
    socket.emit('rejoinGame', {
      gameRoom: player.room,
      playerName: player.name
    });
  }
}

let handleJoin = (io, socket, params, callback) => {
  let player = playerList.findPlayer(socket.request.session.id),
      game = gameList.findGame(params.game);

  if (player) playerList.removePlayer(player);
  player = new Player(socket.request.session.id, params.playerName, params.game),
  playerList.addPlayer(player);

  if (game) {
    if (game.playerCount() == 4) return callback(true);
    if (!game.findPlayer(player.id)) game.addPlayer(player);
  } else {
    game = new Game(params.game, params.winningScore, player);
    gameList.addGame(game);
  }

  socket.join(params.game);
  alertJoin(io, socket, game);
  callback(false);
}

module.exports = {
  playerList,
  gameList,
  alertJoin,
  findAndRejoin,
  handleJoin
}
