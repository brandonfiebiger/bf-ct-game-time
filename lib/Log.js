const GamePiece = require('./GamePiece.js');

class Log extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    super(x, y, height, width, color, dx, dxv);
  }
}

module.exports = Log