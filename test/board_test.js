const { expect } = require('chai');
const { Game } = require('../bin/game.js');

describe('Battleship Board', () => {
  let game = new Game();

  it('Displays a Board on Game Start', () => {
    const expected = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ ~ ~',
    ].join('\n');
    expect((game.start())).to.deep.equal(expected);
  });
  it('Displays Ship on Game Board', () => {
    const placeShip = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ D',
      'C ~ ~ D',
    ].join('\n');
    expect((game.placeShip())).to.equal(placeShip);
  });
});
