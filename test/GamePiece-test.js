const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', function() {

  it('should have properties', function() {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0', 1)

    assert.deepEqual(gamePiece, {
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      color: 'rgb(250, 0, 0)',
      dx: 1,
      dxv: .5
    })
  })
})