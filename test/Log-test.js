const { expect } = require('chai');
const Log = require('../lib/Log.js');

describe('Log', function() {
  it('should instansiate our loyal log', function() {

    const log = new Log();
    expect(log).to.be.a('object')
  })

  it('should appear on the canvas', function() {
    const log = new Log(250, 123, 40.4, 150, 'rgb(148, 90, 48)', 1, 2.5);
    expect(log.y).to.equal(123);
  })

  it('should be able to create multiple logs', function() {
    const log1 = new Log(250, 123, 40.4, 150, 'rgb(148, 90, 48)', 1, 2.5);
    const log2 = new Log(250, 123, 40.4, 150, 'rgb(148, 90, 48)', 1, 2.5);
    const log3 = new Log(250, 123, 40.4, 150, 'rgb(148, 90, 48)', 1, 2.5);
    expect(log1).to.be.an('object')
    expect(log2).to.be.an('object')
    expect(log3).to.be.an('object')
  })

  it('should have functions to move left and right', function() {
    const log = new Log(250, 123, 40.4, 150, 'rgb(148, 90, 48)', 1, 2.5);
    expect(log.moveLeft).to.be.a('function')
    expect(log.moveRight).to.be.a('function')
  })

  it('should move left', function() {
    const log = new Log(250, 123, 40.4, 150, 'rgb(148, 90, 48)', 1, 2.5);
    log.moveLeft();
    expect(log.x).to.equal(247.5)
  })

  it('should move right', function() {
    const log = new Log(250, 123, 40.4, 150, 'rgb(148, 90, 48)', 1, 2.5);
    log.moveRight();
    expect(log.x).to.equal(252.5)
  })
})