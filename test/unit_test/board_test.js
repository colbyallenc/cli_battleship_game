const { expect } = require('chai');
const { getBoard, storeShips } = require('../../bin/board.js');

describe.only('Battleship Board', () => {
  const expectedShips = [{ name: 'D', row: 'A', col: 3 }];
  // let game = new Board();
  const expected = [
    '- 1 2 3',
    'A ~ ~ D',
    'B ~ ~ D',
    'C ~ ~ ~',
  ].join('\n');
  it('Should store ship in ships array', () => {
    expect(storeShips('D', 'A', 3)).to.equal(expectedShips);
  });
  it('Should return Board with Destoryer at A3,B3', () => {
    expect(getBoard()).to.equal(expected);
  });
});
