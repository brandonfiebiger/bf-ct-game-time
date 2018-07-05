const { expect } = require('chai');
const Score = require('../lib/Score.js');
const Frog = require('../lib/Frog.js');
const Game = require('../lib/Game.js');

describe('Score', function() {

  it('should be an object', function () {
  const score = new Score();
  expect(score).to.be.an('object'); 
  })

  it('should start with a score of 0', function () {
    const score = new Score();
    expect(score.points).to.equal(0)
  })

  it('score should increment by 200 if frog makes it to landing', function() {
    const score = new Score();
    const game = new Game();
    game.grassLanding();
    expect(score.points).to.equal(200);
  })

  it('should start the game over if the player loses three lives', function() {
    const score = new Score();
    const frog = new Frog();
    frog.hopUp(score);
    frog.frogDies(score);
    frog.frogDies(score);
    frog.frogDies(score);
    score.gameOver(frog);
    expect(score.lives).to.equal(3);
    expect(score.points).to.equal(0);
  })

})
