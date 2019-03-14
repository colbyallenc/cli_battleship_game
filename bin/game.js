#! /usr/local/bin/node 
//why doesnt env locate node?
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
