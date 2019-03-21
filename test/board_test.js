const { expect } = require('chai');
const { Game } = require('../bin/game.js');

describe('Battleship Board', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  it('Displays a Board', () => {
    const expected = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ ~ ~',
    ].join('\n');
    expect((game.start())).to.deep.equal(expected);
  });
  it('Places Ship on board', () => {
    const placeShip = [
      '- 1 2 3',
      'A ~ ~ ~',
      'B ~ ~ ~',
      'C ~ D D',
    ].join('\n');
    expect((game.placeShip())).to.equal(placeShip);
  });

  Describe('Attacks to Opponent', ()=> {
    xit('Displays when Player Attacks Opponent', () => {
      expect(());
    });
    xit('Displays when Player Hits Opponent Ship', () => {
      expect(());
    });
    xit('Displays when Player has Sunken Opponent Ship', () => {
      expect(());
    });
    xit('Displays when Player Strikes Opponent Ship', () => {
      expect(());
    });
    xit('Displays when Player Sinks Opponent Ship', () => {
      expect(());
    });
  })
  
  Describe('Attacks to Player', () => {
    xit('Displays when Players Ship is Hit', () => {
      expect(());
    });
    xit('Displays when Player has Sunken Opponent Ship', () => {
      expect(());
    });
    xit('Displays when Player Strikes Opponent Ship', () => {
      expect(());
    });
    xit('Displays when Player Sinks Opponent Ship', () => {
      expect(());
    });  
  })
});
