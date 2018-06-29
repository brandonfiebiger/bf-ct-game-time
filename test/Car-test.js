const { expect } = require('chai');
const Car = require('../lib/Car.js');

describe('Car', function() {
  it('should instansiate our enemy car', function() {
    const car = new Car();
    expect(car).to.be.an('object')
  })

  it('should be able to create multiple instances of car', function() {
    const car1 = new Car();
    const car2 = new Car();
    expect(car1).to.be.an('object');
    expect(car2).to.be.an('object');
  })
})