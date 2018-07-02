const GamePiece = require('./GamePiece.js');

class Frog extends GamePiece  {
  constructor(x, y, height, width, color, dx, dxv, dy, dyv) {
    super(x = 350, y = 639, height = 30, width = 30, color = 'rgb(14, 185, 117)', dx = 1, dxv = 2.5, 1, 5);
    this.dy = dy;
    this.dyv = dyv;
  }

  hopLeft() {
    this.x > 0 ? this.x -= 38: this.x = 0
  }

  hopUp() {
    this.y > 0 ? this.y -= 38: this.y = 0
  }

  hopRight() {
    this.x < 570 ? this.x += 38: this.x = 570
  }

  hopDown() {
    this.y < 670 ? this.y += 38: this.y = 670
  }

  frogDies() {
    alert('you died')
    this.x = 350;
    this.y = 639;
  }
}



module.exports = Frog;