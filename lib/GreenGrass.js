const GamePiece = require('./GamePiece.js');

class GreenGrass extends GamePiece {
  constructor(x, y, height, width, color) {
    super()
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }
}













module.exports = GreenGrass;