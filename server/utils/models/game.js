// class Game {
//   constructor(name, winningScore, owner) {
//     this.name = name;
//     this.owner = owner;
//     this.players = [owner];
//     this.teams = {
//       team1: [],
//       team2: []
//     };
//     this.winningScore = winningScore;
//     this.currentScore = {
//       team1: 0,
//       team2: 0
//     };
//   }
//
//   findPlayer(id) {
//     let player = this.players.filter((player) => player.id === id)[0];
//     return player;
//   }
//
//   addPlayer(player) {
//     this.players.push(player);
//     return player;
//   }
//
//   playerCount() {
//     return this.players.length;
//   }
//
//   setTeams(player) {
//     this.teams.team1 = [this.owner, player];
//     this.teams.team2 = this.players.filter((e) => {
//       return e.id != owner.id && e.id != player.id;
//     });
//   }
// }

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
