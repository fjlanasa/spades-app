class GameList {
  constructor() {
    this.games = [];
  }

  addGame(game) {
    this.games.push(game);
  }

  findGame(name) {
    let game = this.games.filter((game) => game.name === name)[0];
    return game;
  }

  removeGame(game) {
    this.games.splice(this.games.indexOf(game));
  }
}

module.exports = {GameList};
