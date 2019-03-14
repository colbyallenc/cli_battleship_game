const { expect } = require('chai');
const { Game } = require('../bin/game.js');

describe.only('Board Test', () => {
  const gameBoard = [
    '- 1 2 3',
    'A ~ ~ ~',
    'B ~ ~ ~',
    'C ~ ~ ~',
  ].join("\n");
  const game = new Game(gameBoard);

  it('Should have a game with a board', () => {
    expect(game.getBoard()).to.equal(gameBoard);
  });
});
