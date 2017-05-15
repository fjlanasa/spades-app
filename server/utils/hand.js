class Hand {
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
      if (card.suit === this.winner.suit) {
        if (card.value > this.winner.value) { card.numericValue() > this.winner.numericValue() }
      } else if (card.suit === 'S') {
        this.winner = card;
        this.trump = card.suit;
      }
    });

    return this.winner;
  }
}

module.exports = {Hand};
