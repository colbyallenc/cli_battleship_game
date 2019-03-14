#! /usr/local/bin/node 
//why doesnt env locate node?
const { Ship } = require('./ship.js');

class Game {
  constructor(board) {
    this.board = board;
    this.ship = new Ship();
  }

  getBoard() {
    return this.board;
  }

  addShip() {
  }
}

const game1 = new Game([
  '- 1 2 3',
  'A ~ ~ ~',
  'B ~ ~ ~',
  'C ~ ~ ~',
].join("\n"));

game1.addShip([
  '- 1 2 3',
  'A ~ ~ ~',
  'B ~ ~ ~',
  'C ~ D D',
]);
// console.log(game1);

module.exports = { Game };
