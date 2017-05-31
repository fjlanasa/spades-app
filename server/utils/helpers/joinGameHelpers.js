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
        gameRoom: player.room,
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
    { $set: {
      socketId: socket.id,
      name: params.playerName,
      room: params.game
    } },
    { upsert: true, new: true }
  ).then((player) => {
    Game.findOne({name: params.game}).then((game) => {
      if (game) {
        let players = game.players.map((p) => { return p.sessionId});
        if (players.length == 4) return callback(true);
        if (!players.includes(player.sessionId)) {
          game.players.push(player);
        } else {
          game.players[players.indexOf(player.sessionId)] = player;
        }
        game.save().then((game) => {
          socket.join(params.game);
          alertJoin(io, socket, game);
          callback(false);
        });
      } else {
        let newGame = new Game({
          name: params.game,
          winningScore: params.winningScore,
          _owner: player,
          players: [player]
        });
        newGame.save().then((game) => {
          socket.join(params.game);
          alertJoin(io, socket, game);
          callback(false);
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  })
}

module.exports = {
  alertJoin,
  findAndRejoin,
  handleJoin
}
