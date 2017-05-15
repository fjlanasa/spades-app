class Trick {
  constructor(card) {
    this.cards = [card];
    this.trump = card.suit;
    this.winner = card;
  }

  addCard(card) {
    this.cards.push(card);
  }

  pickWinner() {
    this.cards.slice(1).forEach((card) => {
      if (card.suit === this.winner.suit && card.numericValue() > this.winner.numericValue()) {
        this.winner = card;
      } else if (card.suit === 'S') {
        this.winner = card;
        this.trump = 'S';
      }
    });
    return this.winner;
  }
}

module.exports = {Trick};
