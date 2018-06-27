const { expect } = require('chai');
const Log = require('../lib/Log.js');

describe('Log', function() {
  it('should instansiate our loyal log', function() {

    const log = new Log();
    expect(log).to.be.a('object')
  })

  it('should be appear on the canvas', function() {
    const log = new Log();

    expect(log.y).to.equal(50);
  })

  it('should move', function() {
    const log = new Log();
    log.move()
    ;
    expect(log.x).to.equal(50.5)
  })
})