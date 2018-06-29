const GamePiece = require('./GamePiece.js'
)

class Car extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    super(350, 400, 10, 10, 'rgb(14, 185, 117)', 1, .5)
  }
}

module.exports = Car