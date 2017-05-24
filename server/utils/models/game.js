class Game {
  constructor(name, winningScore, owner) {
    this.name = name;
    this.owner = owner;
    this.players = [owner];
    this.teams = {
      team1: [],
      team2: []
    };
    this.winningScore = winningScore;
    this.currentScore = {
      team1: 0,
      team2: 0
    };
  }

  findPlayer(id) {
    let player = this.players.filter((player) => player.id === id)[0];
    return player;
  }

  addPlayer(player) {
    this.players.push(player);
    return player;
  }

  playerCount() {
    return this.players.length;
  }

  setTeams(player) {
    this.teams.team1 = [this.owner, player];
    this.teams.team2 = this.players.filter((e) => {
      return e.id != owner.id && e.id != player.id;
    });
  }
}

module.exports = {Game}
