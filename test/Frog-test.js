const { expect } = require('chai');
const Frog = require('../lib/Frog.js');

describe('Frog', function() {
  it('should be an object', function() {

    const frog = new Frog();

    expect(frog).to.be.an('object')
  })

  it('should be appear on the canvas', function() {
    const frog = new Frog();

    expect(frog.x).to.equal(50);
  })

  it('should move', function() {
    const frog = new Frog();

    frog.moveFrog();

    expect(frog.x).to.equal(50.5)
  })

  it('should have a direction on y-axis', function() {
    const frog = new Frog();
    frog.moveFrog()
  })

  it('should move along x axis')

})