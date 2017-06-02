const mongoose = require('mongoose');

let GameSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  _owner: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  players: {
    type: Array,
    require: true
  },
  teams: {
    type: mongoose.Schema.Types.Mixed,
    require: true,
    default: {
      team1: [],
      team2: []
    }
  },
  winningScore: {
    type: String,
    require: true
  },
  currentScore: {
    type: mongoose.Schema.Types.Mixed,
    require: true,
    default: {
      team1: 0,
      team2: 0
    }
  }
});

// GameSchema.statics.createOrJoin = function (gameDetails, player) {
//   Game.findOne({name: gameDetails.name}).then((game) => {
//     if (game) {
//       let players = game.players.map((p) return p.sessionId);
//       if (players.includes(player.sessionId)) {
//
//       }
//     } else {
//       let game = new Game({
//         name: gameDetails.name,
//         _owner: player,
//         winningScore: gameDetails.winningScore,
//         players: [player]
//       });
//     }
//   })
// }

let Game = mongoose.model('Game', GameSchema);

module.exports = {Game}
