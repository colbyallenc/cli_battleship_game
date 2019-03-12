const { expect } = require('chai');
const { cmd } = require('./cmd');

describe('Battleship', () => {
  it('Welcomes you to the game @acceptance', async () => {
    const response = await cmd.execute(
      './src/gameBoard.js',
    );

    //shows an empty board --> fail
    //add board --> pass
    //board.js unit test
        
    expect(response).to.equal(
      'you ordered a pizza with:\n  - peppers\n  - gouda cheese',
    );
  });
});
