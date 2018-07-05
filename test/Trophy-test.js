const { expect } = require('chai');
const Trophy = require('../lib/Trophy.js');

describe('Log', function() {

  it('should instansiate a trophy', function() {
    const trophy = new Trophy();
    expect(trophy).to.be.a('object')
  }) 

  it('should have an x coordinate property', function() {
    const trophy = new Trophy(5);
    expect(trophy.x).to.equal(5)
  })  

  it('should also have a y coordinate property', function() {
    const trophy = new Trophy(5, 6);
    expect(trophy.y).to.equal(6)
  })  

  it('should also have a height property', function() {
    const trophy = new Trophy(5, 6, 25);
    expect(trophy.height).to.equal(25)
  })  

  it('should also have a width property', function() {
    const trophy = new Trophy(5, 6, 25, 50);
    expect(trophy.width).to.equal(50)
  })  

  it('should draw a trophy', function() {
    const trophy = new Trophy();
    expect(trophy.drawTrophy).to.be.a('function')
  })
})  
