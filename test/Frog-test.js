const { expect } = require('chai');
const Frog = require('../lib/Frog.js');

describe('Frog', function() {
  it('should be a object', function() {

    const frog = new Frog();

    expect(frog).to.be.a('object')
  })

     it('should be appear on the canvas', function() {
      const frog = new Frog();

      expect(frog.x).to.equal(50);
     })

  it('should move', function() {
    const frog = new Frog();

    frog.move();

    expect(frog)
  })


})