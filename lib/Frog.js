const GamePiece = require('./GamePiece.js');
const Score = require('./Score.js');
const score = new Score();
const Lives = require('./Lives.js');
const lives = new Lives();

class Frog extends GamePiece  {
  constructor(x, y, height, width, color, dx, dxv, dy, dyv, img) {
    super(x = 350, y = 680, height = 30, width = 30, color, dx = 1, dxv = 2.5, dy = 1, dyv = 5, img);

  }

  drawFrog(ctx) {
    let image = document.getElementById('frog');
    ctx.drawImage(image, this.x, this.y, this.width, this.height)
  }

  hopLeft() {
    this.x > 0 ? this.x -= 57: this.x = 0;
    if (this.x < 0) {
      this.x = 0
    }
  }

  hopUp(score) {
    // score.points += 10;
    // console.log(score.points)
    this.y > 0 ? this.y -= 50: this.y = 0;
  }

  hopRight() {
    this.x < 570 ? this.x += 57: this.x = 570;
    if (this.x > 600) {
      this.x = 600 - this.width 
    }
  }

  hopDown() {
    this.y < 670 ? this.y += 50: this.y = 670
  }

  frogDies(lives) {
    lives.life -= 1;
    this.x = 350;
    this.y = 680;
  }
}

module.exports = Frog;