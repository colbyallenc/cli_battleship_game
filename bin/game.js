#! /usr/local/bin/node 
//why doesnt env locate node?
// const { Ship } = require('./ship.js');

class Game {
  constructor(board, ship) {
    this.board = board;
    this.ship = ship;
  }

  getBoard() {
    return this.board;
  }

  addShip() {
    return this.ship;
  }
}

module.exports = { Game };
