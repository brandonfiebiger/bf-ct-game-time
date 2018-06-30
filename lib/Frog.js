const GamePiece = require('./GamePiece.js');

class Frog extends GamePiece  {
  constructor(x, y, height, width, color, dx, dxv, dy, dyv) {
    super(350, 600, 50, 50, 'rgb(14, 185, 117)', 1, .5, 1, .5);
    // this.dy = dy;
    // this.dyv = dyv;
  }

  moveFrogLeft() {
    this.x > 0 ? this.x -= this.width: this.x = 0
    
  }

  moveFrogUp() {
    this.y > 0 ? this.y -= this.height: this.y = 0

  }

  moveFrogRight() {
    this.x < 650 ? this.x += this.width: this.x = 650

  }

  moveFrogDown() {
    this.y < 650 ? this.y += this.width: this.y = 650

  }

  frogDies() {
    this.x = 350;
    this.y = 600;
  }

}


module.exports = Frog;