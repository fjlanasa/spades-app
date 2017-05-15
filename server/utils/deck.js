const _ = require('lodash');
const {Card} = require('./card.js');

class Deck {
  constructor() {
    this.cards = this._shuffled52();
  }

  _shuffled52() {
    let suits = ['D', 'H', 'C', 'S'];
    let values = ['2', '3', '4', '5', '6', '7', '8' ,'9', '10', 'J', 'Q', 'K', 'A'];
    let cards = [];
    for(let i = 0; i < suits.length; i++) {
      for(let j = 0; j < values.length; j++) {
        cards.push(new Card(values[j], suits[i]));
      }
    }
    return _.shuffle(cards);
  }
}

module.exports = {Deck};
