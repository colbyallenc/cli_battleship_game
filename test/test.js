const { expect } = require('chai');
const { Game } = require('../bin/game.js');

describe.only('Board Test', () => {
  const gameBoard = [
    '- 1 2 3',
    'A ~ ~ ~',
    'B ~ ~ ~',
    'C ~ ~ ~',
  ].join("\n");
  const newShip = [
    '- 1 2 3',
    'A ~ ~ ~',
    'B ~ ~ ~',
    'C ~ D D',
  ].join("\n");

  const game = new Game(gameBoard, newShip);

  it('Should have a game with a board', () => {
    expect(game.getBoard()).to.equal(gameBoard);
  });

  it('Should add a character to the board', () => {
    expect(game.addShip()).to.equal(newShip);
  });
});
