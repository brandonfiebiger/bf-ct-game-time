const GamePiece = require('./GamePiece.js');

class Frog extends GamePiece  {
  constructor(x, y, height, width, color, dx = 1, dxv = .5, dy = 1, dyv=.5) {
    super(50, 200, 50, 50, 'rgb(14, 185, 117)', 1, .5, 1, .5);
    // this.dy = dy;
    // this.dyv = dyv;
  }
  moveFrog() {
    
  }
}


module.exports = Frog;