const GamePiece = require('./GamePiece.js');

class Trophy extends GamePiece {
  constructor(x, y, height, width, color) {
    super()
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }
}




module.exports = Trophy;
