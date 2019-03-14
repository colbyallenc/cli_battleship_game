#! /usr/local/bin/node 

class Ship {
  constructor(ship) {
    this.ship = ship;
  }

  placeShip() {
    return this.ship;
  }
}

// const newShip = new Ship([
//   '- 1 2 3',
//   'A ~ ~ ~',
//   'B ~ ~ ~',
//   'C ~ D D',
// ].join("\n"));

// console.log(newShip);

module.exports = { Ship };
