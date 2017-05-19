class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  numericValue() {
    switch(this.value) {
      case 'A':
        return 14;
      case 'K':
        return 13;
      case 'Q':
        return 12;
      case 'J':
        return 11;
      default:
        return parseInt(this.value, 10);
    }
  }
}

module.exports = {Card};
