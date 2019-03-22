#! /usr/local/bin/node 
//why doesnt env locate node?

let ships = [
  { name: 'D', row: 'A', col: 3, hits: },
  { name: 'D', row: 'B', col: 3, hits: }
];
//  //stores ship in ships array
// function storeShips(name, row, col){
//   ships.push({ name: name, row:row, col: col})
//   return ships
// }
// //queries ships array for ship at current position
// function getShipAt(row, col) {
// let foundShip = '~'
//   for(let i = 0; i < ships.length; i++){
//     if(ships[i].row === row && ships[i].col === col){
//       foundShip = ships[i].name
//     }
//   }
//   return foundShip
// }
// console.log(storeShips("D", "A", 4));
// console.log(board)

// module.exports = { Game };


// Class attempt
class Board {
  constructor(){
    this.board = [
        '- 1 2 3',
        `A ${getShipAt('A', 1)} ${getShipAt('A', 2)} ${getShipAt('A', 3)}`,
        `B ${getShipAt('B', 1)} ${getShipAt('B', 2)} ${getShipAt('B', 3)}`,
        `C ${getShipAt('C', 1)} ${getShipAt('C', 2)} ${getShipAt('C', 3)}`,
      ].join('\n');
    this.ships = [];

  }
 //stores ship in ships array
  storeShips(name, row, col){
    this.ships.push({ name: name, row:row, col: col})
    return this.ships
  }
  // queries ships array for ship at current position
  getShipAt(row, col) {
  let foundShip = '~'
    for(let i = 0; i < this.ships.length; i++){
      if(this.ships[i].row === row && this.ships[i].col === col){
        foundShip = this.ships[i].name
      }
    }
    return foundShip
  }

  drawBoard(){
    this.board = [
        '- 1 2 3',
        `A ${this.getShipAt('A', 1)} ${this.getShipAt('A', 2)} ${this.getShipAt('A', 3)}`,
        `B ${this.getShipAt('B', 1)} ${this.getShipAt('B', 2)} ${this.getShipAt('B', 3)}`,
        `C ${this.getShipAt('C', 1)} ${this.getShipAt('C', 2)} ${this.getShipAt('C', 3)}`,
      ].join('\n');
  }
}

let board = new Board();
board.storeShips("D", "A", 4);
console.log(board);
// placeShip("S", "C", 1);
// board.printShips()

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