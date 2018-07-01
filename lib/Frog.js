const GamePiece = require('./GamePiece.js');

class Frog extends GamePiece  {
  constructor(x, y, height, width, color, dx, dxv, dy, dyv) {
    super(350, 615, 30, 30, 'rgb(14, 185, 117)', 1, 2.5, 1, 5);
    // this.dy = dy;
    // this.dyv = dyv;
  }

  moveFrogLeft() {
    this.x > 0 ? this.x -= 10: this.x = 0
  }

  moveFrogUp() {
    this.y > 0 ? this.y -= 10 : this.y = 0
  }

  moveFrogRight() {
    this.x < 570 ? this.x += 10: this.x = 570
  }

  moveFrogDown() {
    this.y < 670 ? this.y += 10: this.y = 670
  }

  frogDies() {
    alert('you died')
    this.x = 350;
    this.y = 600;
  }
}



module.exports = Frog;