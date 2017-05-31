const mongoose = require('mongoose');

let PlayerSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    require: true,
    unique: true,
  },
  socketId: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    require: true,
  },
  room: {
    type: String
  }
});

PlayerSchema.statics.findOrCreate = function (playerDetails) {
  this.findOneAndUpdate({
    sessionId: playerDetails.sessionId,
    name: playerDetails.name
  },{
    $set: playerDetails
  }, {
    new: true
  }).then((player) => {
    if (player) {
      return player;
    } else {
      let newPlayer = new this({
        sessionId: playerDetails.sessionId,
        socketId: playerDetails.socketId,
        name: playerDetails.name,
        room: playerDetails.room
      });
      newPlayer.save();
      return newPlayer;
    }
  });
}

let Player = mongoose.model('Player', PlayerSchema);

module.exports = {Player};
