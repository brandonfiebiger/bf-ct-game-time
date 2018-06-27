const GamePiece = require('./GamePiece.js');

class Frog extends GamePiece  {
  constructor(x, y, height, width, color, dx = 1, dxv = .5, dy = 1, dyv=.5) {
    super(50, 500, 20, 20, 'rgb(14, 185, 117)', 1, .5, 1, .5);
    this.dy = dy;
    this.dyv = dyv;
  }
  moveAlongY() {
    this.y += this.dy * this.dyv;
  }
}


module.exports = Frog;