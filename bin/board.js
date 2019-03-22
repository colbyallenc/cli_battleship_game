let ships = [
  { name: 'D', row: 'A', col: 3 },
  { name: 'D', row: 'B', col: 3 },
];

function getBoard() {
  let board = [
    '- 1 2 3',
    `A ${getShipAt('A', 1)} ${getShipAt('A', 2)} ${getShipAt('A', 3)}`,
    `B ${getShipAt('B', 1)} ${getShipAt('B', 2)} ${getShipAt('B', 3)}`,
    `C ${getShipAt('C', 1)} ${getShipAt('C', 2)} ${getShipAt('C', 3)}`,
  ].join('\n');

  return board;
}
//stores ship in ships array
function storeShips(name, row, col) {
  ships.push({ name: name, row:row, col: col});
  return ships;
}


function getShipAt(row, col) {
  let foundShip = '~';
  for (let i = 0; i < ships.length; i++) {
    if (ships[i].row === row && ships[i].col === col) {
      foundShip = ships[i].name;
    }
  }
  return foundShip;
}

module.exports = {
  getBoard,
  storeShips,
};
