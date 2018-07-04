const { expect } = require('chai');
const Frog = require('../lib/GreenGrass.js');
const ScoreAndLives = require('../lib/Score.js');

describe('GreenGrass', function() {
  it('should be and object', function() {
    const greenGrass = new GreenGrassk();
    expect(greenGrass).to.be.an('object');
  });

  
})