#! /usr/local/bin/node 
//why doesnt env locate node?
const { Ship } = require('./ship.js');

class Game {
  constructor() {
    this.board = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ ~ ~',
    ].join('\n');
  }

  start() {
    return this.board;
  }
}

// const destroyer = new Ship('C2', 'C3');
const game = new Game();
console.log(game.start());
// console.log(game);
//game.start? -->draws board and places things for us
//then starts the game loop
//board querys ship location -- > are you here? (unit test)
// if (here) draw D
// else continue looping
//store coordinates on a ship object
// 

//CLI is just another version of a UI
//dont let the extrmities get down into actual funtionality