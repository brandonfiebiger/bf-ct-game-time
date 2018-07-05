const GamePiece = require('./GamePiece.js');

class GreenGrass extends GamePiece {
  constructor(x, y, height, width) {
    super();
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }
}













module.exports = GreenGrass;