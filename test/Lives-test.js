const { expect } = require('chai');
const Lives = require('../lib/Lives.js');
const Frog = require('../lib/Frog.js');

describe('Lives', function() {

  it('should start with a count of 3 lives', function() {
    const lives = new Lives();
    expect(lives.life).to.equal(3);
  });

  it('should lose a life if frog dies', function() {
    const lives = new Lives();
    const frog = new Frog();
    frog.frogDies(lives);
    expect(lives.life).to.equal(2);
  })


});