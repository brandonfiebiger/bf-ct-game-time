const { expect } = require('chai');
const ScoreAndLives = require('../lib/Score.js');
const Frog = require('../lib/Frog.js');

describe('ScoreAndLives', function() {
  it('should be an object', function () {
  const scoreAndLives = new ScoreAndLives();
  expect(scoreAndLives).to.be.an('object'); 
  })

  it('should start with a count of 3 lives', function() {
    const scoreAndLives = new ScoreAndLives();
    expect(scoreAndLives.lives).to.equal(3);
  })

  it('should lose a life if frog dies', function() {
    const scoreAndLives = new ScoreAndLives();
    const frog = new Frog();
    frog.frogDies(scoreAndLives);
    expect(scoreAndLives.lives).to.equal(2);
  })

  it('score should increment the score when frog moves forward', function() {
    const scoreAndLives = new ScoreAndLives();
    const frog = new Frog();
    frog.hopUp(scoreAndLives);
    expect(scoreAndLives.points).to.equal(10);
  })

  it('should start the game over if the player loses three lives', function() {
    const scoreAndLives = new ScoreAndLives();
    const frog = new Frog();
    frog.hopUp(scoreAndLives);
    frog.frogDies(scoreAndLives);
    frog.frogDies(scoreAndLives);
    frog.frogDies(scoreAndLives);
    scoreAndLives.gameOver(frog);
    expect(scoreAndLives.lives).to.equal(3);
    expect(scoreAndLives.points).to.equal(0);
  })

})
