const { expect } = require('chai');
const Frog = require('../lib/Frog.js');
const Score = require('../lib/Score.js');
const Car = require('../lib/Car.js');
const Lives = require('../lib/Lives.js');

describe('Frog', function() {

  it('should instantiate our courageous friend the frog', function() {
    const frog = new Frog();
    expect(frog).to.be.an('object')
  });

  it('should have an x coordinate default value', function() {
    const frog = new Frog();
    expect(frog.x).to.equal(0);
  });

  it('should have a y coordinate default value', function() {
    const frog = new Frog();
    expect(frog.y).to.equal(685);
  });

  it('should have a height default value', function() {
    const frog = new Frog();
    expect(frog.height).to.equal(30);
  });

  it('should have a width default value', function() {
    const frog = new Frog();
    expect(frog.width).to.equal(30);
  });

  it('should have a dx default value', function() {
    const frog = new Frog();
    expect(frog.dx).to.equal(1);
  });

  it('should have a dxv default value', function() {
    const frog = new Frog();
    expect(frog.dxv).to.equal(2);
  });

  it('should have a dy default value', function() {
    const frog = new Frog();
    expect(frog.dy).to.equal(1);
  });

  it('should have a dyv default value', function() {
    const frog = new Frog();
    expect(frog.dyv).to.equal(5);
  });

  it('should appear on the canvas', function() {
    const frog = new Frog();
    frog.x = 37
    expect(frog.x).to.equal(37);
  });

  it('should hop left', function() {
    const frog = new Frog();
    frog.x = 28.5
    frog.hopLeft();
    expect(frog.x).to.equal(0);
  });

  it('should hop right', function() {
    const frog = new Frog();
    frog.x = 0
    frog.hopRight();
    expect(frog.x).to.equal(28.5)
  });

  it('should hop up', function() {
    const frog = new Frog();    
    frog.y = 600
    frog.hopUp();
    expect(frog.y).to.equal(550);
  });

  it('should be able to die', function() {
    const frog = new Frog();
    expect(frog.frogDies).to.be.a('function')
  })
  
  it('should return to the start point when dead', function() {
    const frog = new Frog();
    const lives = new Lives();    
    frog.frogDies(lives)
    expect(frog.x).to.equal(350)
  })
})
