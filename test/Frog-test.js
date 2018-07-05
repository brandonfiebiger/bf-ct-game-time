const { expect } = require('chai');
const Frog = require('../lib/Frog.js');
const Score = require('../lib/Score.js');
const Car = require('../lib/Car.js');

describe('Frog', function() {
  it('should be an object', function() {
    const frog = new Frog();
    expect(frog).to.be.an('object')
  });

  it('should appear on the canvas', function() {
    const frog = new Frog();
    frog.x = 37
    expect(frog.x).to.equal(37);
  });


  it('should hop left', function() {
    const frog = new Frog();
    frog.x = 57
    frog.hopLeft();
    expect(frog.x).to.equal(0);
  });

  it('should hop right', function() {
    const frog = new Frog();
    frog.x = 0
    frog.hopRight();
    expect(frog.x).to.equal(57)
  });

  it.skip('should hop up', function() {
    const frog = new Frog();    
    const score = new Score;
    frog.hopUp(score);
    frog.y = 600
    expect(frog.y).to.deepEqual(550);
  });
  
  it('should gain ten points as it hops up', function() {
    const score = new Score;
    frog.hopUp();
    expect('score').to.equal(10)

  })

  it('should be able to die', function() {
    const frog = new Frog();
    expect(frog.frogDies).to.be.a('function')
  })
  
  it('should return to the start point when dead', function() {
    const frog = new Frog();
    frog.frogDies()
    expect(frog.x).to.equal(0)
  })
})
