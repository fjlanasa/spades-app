class PlayerList {
  constructor() {
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }

  findPlayer(id) {
    let player = this.players.filter((player) => player.id === id)[0];
    return player;
  }

  removePlayer(player) {
    this.players.splice(this.players.indexOf(player));
  }
}

module.exports = {PlayerList};
