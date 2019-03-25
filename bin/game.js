#! /usr/local/bin/node 

// Class attempt
class Board {
  constructor() {
    this.board = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ ~ ~',
    ].join('\n');
    this.ships = [];
  }

  // stores ship in ships array
  storeShips(name, row, col) {
    this.ships.push({ name: name, row:row, col: col});
    return this.ships;
  }

  // queries ships array for ship at current position
  getShipAt(row, col) {
    let foundShip = '~';
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].row === row && this.ships[i].col === col) {
        foundShip = this.ships[i].name;
      }
    }
    return foundShip;
  }

  drawBoard() {
    this.board = [
      '- 1 2 3',
      `A ${this.getShipAt('A', 1)} ${this.getShipAt('A', 2)} ${this.getShipAt('A', 3)}`,
      `B ${this.getShipAt('B', 1)} ${this.getShipAt('B', 2)} ${this.getShipAt('B', 3)}`,
      `C ${this.getShipAt('C', 1)} ${this.getShipAt('C', 2)} ${this.getShipAt('C', 3)}`,
    ].join('\n');
    return this.board;
  }
}

const board = new Board();
board.storeShips('D', 'A', 4);
board.drawBoard();
