const { expect } = require('chai');
const { EOL } = require('os');
const { cmd } = require('./cmd');

describe('Battleship Game Play', () => {
  xit('@acceptance: Displays a Game Board', async () => {
    const response = await cmd.execute('./bin/game.js');
    const result = response.trim().split(EOL);
    const expected = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ ~ ~',
    ];
    expect((result)).to.deep.equal(expected);
  });

  xit('@acceptance: Places a ship on the Game Board', async () => {
    const response = await cmd.execute('./bin/game.js');
    const result = response.trim().split(EOL);
    const expected = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ D D',
    ];
    expect((result)).to.deep.equal(expected);
  });
  xit('@acceptance: Cpu generates board with ships', () => {
  });
  xit('@acceptance: Display both boards', () => {
  });
  xit('@acceptance: Take a shot at opponents board', () => {
  });
  xit('@acceptance: Update board when opponent ship is hit', () => {
  });
  xit('@acceptance: Opponent takes a shot at player board', () => {

  });
  xit('@acceptance: Display board when player board is hit', () => {

  });
  xit('@acceptance: If length of board is hit, sink ship', () => {

  });
  xit('@acceptance: If all of the boats are sunk, win game', () => {

  });
});
