const { expect } = require('chai');
const { Game } = require('../bin/game.js');

describe('Battleship Board', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
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
      'B ~ ~ ~',
      'C ~ D D',
    ].join('\n');
    expect((game.placeShip())).to.equal(placeShip);
  });

  it('Queries board for position of ship', () => {
    expect((game.queryBoard('D'))).to.deep.equal([28, 30]);
  });
});
