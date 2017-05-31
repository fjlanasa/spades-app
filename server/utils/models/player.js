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

let Player = mongoose.model('Player', PlayerSchema);

module.exports = {Player};
