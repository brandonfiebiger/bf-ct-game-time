const GamePiece = require('./GamePiece.js');

class Water extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    super(x = 0, y = 120, height = 229, width = 600, color = 'rgb(0, 2, 68)', dx = 0, dxv = 0);
  }
}

module.exports = Water