const GamePiece = require('./GamePiece.js');

class Frog extends GamePiece  {
  constructor(x, y, height, width, color, dx, dxv, dy, dyv, img) {
    super(x = 350, y = 680, height = 30, width = 30, color, dx = 1, dxv = 2.5, dy = 1, dyv = 5, img);
  }

  drawFrog(ctx) {
    let image = document.getElementById('frog');
    ctx.drawImage(image, this.x, this.y, this.width, this.height)
    console.log('imagesrc: ', image.src)
  }

  hopLeft() {
    this.x > 0 ? this.x -= 50: this.x = 0
  }

  hopUp(object) {
    this.y > 0 ? this.y -= 50: this.y = 0
    object.points += 10;
  }

  hopRight() {
    this.x < 570 ? this.x += 50: this.x = 570
  }

  hopDown() {
    this.y < 670 ? this.y += 50: this.y = 670
  }

  frogDies(object) {
    // alert('you died')
    this.x = 350;
    this.y = 680;
    object.lives--;
  }
}



module.exports = Frog;