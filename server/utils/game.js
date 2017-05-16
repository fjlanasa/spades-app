class Game {
  constructor(name, winningScore) {
    this.name = name;
    this.owner = null;
    this.players = [];
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
