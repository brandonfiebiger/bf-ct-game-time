const { expect } = require('chai');
const Frog = require('../lib/Frog.js');

describe('Frog', function() {
  it('should be an object', function() {
    const frog = new Frog();
    expect(frog).to.be.an('object')
  });

  it('should appear on the canvas', function() {
    const frog = new Frog();
    expect(frog.x).to.equal(350);
  });

  it('should have functions to move up, down, left and right', function() {
    const frog = new Frog();
    expect(frog.moveFrogUp).to.be.a('function');
    expect(frog.moveFrogDown).to.be.a('function');
    expect(frog.moveFrogLeft).to.be.a('function');
    expect(frog.moveFrogRight).to.be.a('function');
  })

  it('should move left', function() {
    const frog = new Frog();
    frog.moveFrogLeft();
    expect(frog.x).to.equal(340);
  });

  it('should move right', function() {
    const frog = new Frog();
    frog.moveFrogRight();
    expect(frog.x).to.equal(360)
  });

  it('should move up', function() {
    const frog = new Frog();
    frog.moveFrogUp();
    expect(frog.y).to.equal(605)
  })

  
})
