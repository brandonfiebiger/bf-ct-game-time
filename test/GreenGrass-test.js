const { expect } = require('chai');
const GreenGrass = require('../lib/GreenGrass.js');
const Score = require('../lib/Score.js');

describe('GreenGrass', function() {
  it('should be and object', function() {
    const greenGrass = new GreenGrass();
    expect(greenGrass).to.be.an('object');
  });
  it('should have an x coordinate', function() {
    const greenGrass = new GreenGrass(20);
    expect(greenGrass.x).to.equal(20)
  })

  
})