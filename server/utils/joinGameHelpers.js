const {Player} = require('./player.js');
const {PlayerList} = require('./playerList.js');
const {Game} = require('./game.js');
const {GameList} = require('./gameList.js');

let playerList = new PlayerList(),
    gameList = new GameList();

let alertJoin = (io, socket, room) => {
  socket.emit('newMessage', gameList);
  socket.broadcast.to(room).emit('newMessage', 'new user is here');
  io.to(room).emit('newMessage', gameList);
}

let findAndRejoin = (io, socket) => {
  let player = playerList.findPlayer(socket.request.session.id);
  if (player) {
    let game = gameList.findGame(player.room);
    socket.join(player.room);
    alertJoin(io, socket, player.room);
    socket.emit('rejoinGame', {
      gameRoom: player.room,
      playerName: player.name
    });
  }
}

let handleJoin = (io, socket, params, callback) => {
  let player = playerList.findPlayer(socket.request.session.id),
      game = gameList.findGame(params.game);

  if (player) { playerList.removePlayer(player) };
  player = new Player(socket.request.session.id, params.playerName, params.game),
  playerList.addPlayer(player);

  if (game) {
    if (game.playerCount() == 4) { return callback(true); }
    if (!game.findPlayer(player.id)) { game.addPlayer(player) };
  } else {
    game = new Game(params.game, params.winningScore);
    game.addPlayer(player);
    game.owner = player;
    gameList.addGame(game);
  }

  socket.join(params.game);
  alertJoin(io, socket, params.game);
  callback(false);
}

module.exports = {
  playerList,
  gameList,
  alertJoin,
  findAndRejoin,
  handleJoin
}
