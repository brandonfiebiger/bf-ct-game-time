const { expect } = require('chai');
const Frog = require('../lib/Frog.js');

describe('Frog', function() {
  it('should be an object', function() {

    const frog = new Frog();

    expect(frog).to.be.an('object')
  })

  it('should be appear on the canvas', function() {
    const frog = new Frog(50);

    expect(frog.x).to.equal(50);
  })

  it('should move', function() {
    const frog = new Frog(100);
    frog.moveFrogLeft();
    expect(frog.x).to.equal(50);

  })

  it('should move right', function() {
    const frog = new Frog(100);
    frog.moveFrogRight();
    expect(frog.x).to.equal(150)
  })
})
