const GamePiece = require('./GamePiece.js')


class Car extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    super(x, y, height, width, color, dx, dxv);
  }
  drawCar(ctx) {
    let image = document.getElementById('car');
    ctx.drawImage(image, this.x, this.y, this.width, this.height)
    } 
}

module.exports = Car