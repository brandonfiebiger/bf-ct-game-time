const GamePiece = require('./GamePiece.js');

class Water extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    super(0, 120, 229, 600, 'rgb(0, 2, 68)', 0, 0);
  }
}

module.exports = Water