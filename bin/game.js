#! /usr/local/bin/node 
//why doesnt env locate node?
class Game {
  constructor(board, ship) {
    this.board = board;
    this.ship = ship;
  }
}

const destroyer = new Ship('C2', 'C3');
const game = new Game();
game.start();

//game.start? -->draws board and places things for us
//then starts the game loop
//board querys ship location -- > are you here? (unit test)
// if (here) draw D
// else continue looping
//store coordinates on a ship object
// 

//CLI is just another version of a UI
//dont let the extrmities get down into actual funtionality