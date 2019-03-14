const { expect } = require('chai');
const { EOL } = require('os');
const { cmd } = require('./cmd');

describe('Battleship', () => {
  it('@acceptance: Displays a Game Board', async () => {
    const response = await cmd.execute(
      './bin/game.js',
    );
    const result = response.trim().split(EOL);
    const expected = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ ~ ~',
    ];

    expect((result)).to.deep.equal(expected);
  });

  xit('@acceptance: Displays a board with a ship', async () => {
    const response = await cmd.execute(
      './bin/game.js',
    );
    const result = response.trim().split(EOL);
    const expected = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ D D',
    ];

    expect((result)).to.deep.equal(expected);
  });
});
