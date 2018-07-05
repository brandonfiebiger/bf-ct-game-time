const { expect } = require('chai');
const Frog = require('../lib/Frog.js');
const ScoreAndLives = require('../lib/Score.js');

describe('Frog', function() {
  it('should be an object', function() {
    const frog = new Frog();
    expect(frog).to.be.an('object')
  });

  it('should appear on the canvas', function() {
    const frog = new Frog();
    expect(frog.x).to.equal(350);
  });


  it('should hop left', function() {
    const frog = new Frog();
    frog.hopLeft();
    expect(frog.x).to.equal(293);
  });

  it('should hop right', function() {
    const frog = new Frog();
    frog.hopRight();
    expect(frog.x).to.equal(407)
  });

  it('should hop up', function() {
    const scoreAndLives = new ScoreAndLives;
    const frog = new Frog();
    frog.hopUp(scoreAndLives);
    expect(frog.y).to.equal(630);
  });

  it('should be able to die', function() {
    const frog = new Frog();
    const scoreAndLives = new ScoreAndLives;
    frog.frogDies(scoreAndLives);

    expect(scoreAndLives.lives).to.equal(2);
    expect(frog.x).to.equal(350);
    expect(frog.y).to.equal(680);
  })
  
})
