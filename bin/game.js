#! /usr/local/bin/node 
//why doesnt env locate node?
class Game {
  constructor() {
    this.board = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ ~ ~',
    ].join('\n');
    this.shipPosition = [];
  }

  start() {
    return this.board;
  }

  placeShip() {
    this.board = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ D D',
    ].join('\n');
    return this.board;
  }

  queryBoard() {
    this.placeShip();
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] === 'D') {
        this.shipPosition.push(i);
      }
    }
    return this.shipPosition;
  }
}

module.exports = { Game };

// const destroyer = new Ship('C2', 'C3');
// const game = new Game();
// console.log(game.start());


//board querys ship location -- > are you here? (unit test)
// if (here) draw D
// else continue looping
//store coordinates on a ship object
// 

//CLI is just another version of a UI
//dont let the extrmities get down into actual funtionality