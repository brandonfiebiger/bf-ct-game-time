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

  it('should be able to move up, down, left, and right', function() {
    const frog = new Frog();
    frog.hopUp();
    frog.hopDown();
    frog.hopLeft();
    frog.hopRight();
  })

  it('should hop left', function() {
    const frog = new Frog();
    frog.hopLeft();
    expect(frog.x).to.equal(312);
  });

  it('should hop right', function() {
    const frog = new Frog();
    frog.hopRight();
    expect(frog.x).to.equal(388)
  });

  it('should hop up', function() {
    const frog = new Frog();
    frog.hopUp();
    expect(frog.y).to.equal(601)
  });

  it('should be able to die', function() {
    const frog = new Frog();
    frog.Dies();
  })
  
})
