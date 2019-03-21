// TODO: keep this list in the board
let board = new Board();
board.placeShip('D', 'A', 1);
let printed = board.printBoard();
console.log(printed);
   // board should look like:
    /* 
    - 1 2 3
    A D D ~
    B ~ ~ ~
    C ~ ~ ~
    */

const ships = [
  { name: 'D', row: 'A', col: 1 },
];

function printShip(row, col) {
  let foundShip = [];
  for (let i = 0; i < ships.length; i++) {
    if (ships[i].row === row && ships[i].col === col) {
      foundShip = ships[i].name;
    }
  }
}

function placeShip(name, row, col) {
  ships.push({ name: name, row: row, col: col });
}
