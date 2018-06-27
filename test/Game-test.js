const Game = require('../lib/Game.js');
const { expect } = require('chai');

describe('Game',() => {
  it('should be an object',() => {
    const game = new Game();

    expect(game).to.be.an('object');
  })

  
})

