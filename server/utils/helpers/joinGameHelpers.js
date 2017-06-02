const {Player} = require('./../models/player.js');
const {Game} = require('./../models/game.js');

let alertJoin = (io, socket, game) => {
  socket.emit('newMessage', game);
  io.to(game.name).emit('newMessage', game);
}

let findAndRejoin = (io, socket) => {
  Player.findOne({
    sessionId: socket.request.session.id
  }).then((player) => {
    if (player) {
      socket.emit('rejoinGame', {
        gameRoomName: player.game,
        playerName: player.name
      });
    }
  }, (err) => {
    socket.emit('newMessage', err);
  });
}

let handleJoin = (io, socket, params, callback) => {
  Player.findOneAndUpdate(
    {sessionId: socket.request.session.id},
    { $set: { socketId: socket.id, name: params.playerName, game: params.gameRoomName } },
    { upsert: true, new: true }
  ).then((player) => {
    Game.findOne({name: params.gameRoomName}).then((game) => {
      if (game) {
        let players = game.players.map((p) => { return p.sessionId});
        if (players.length == 4 && !players.includes(player.sessionId)) return callback(false);
        if (!players.includes(player.sessionId)) {
          game.players.push(player);
        } else {
          game.players[players.indexOf(player.sessionId)] = player;
        }
        return game.save();
      } else {
        let newGame = new Game({
          name: params.gameRoomName,
          winningScore: params.winningScore,
          _owner: player,
          players: [player]
        });
        return newGame.save();
      }
    }).then((game) => {
      socket.join(params.gameRoomName);
      alertJoin(io, socket, game);
      io.to(game.name).emit('updateGame', {game, status: (game.players.length == 4 ? 'set-teams' : 'pending')});
      callback(true);
    }).catch((err) => {
      console.log(err);
    });
  });
}

module.exports = {
  findAndRejoin,
  handleJoin
}
