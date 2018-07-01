const { expect } = require('chai');
const Water = require('../lib/Water.js');

describe('Water', function() {
  it('should be an object', function() {
    const water = new Water();
    expect(water).to.be.an('object')
  });
});