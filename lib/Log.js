const GamePiece = require('./GamePiece.js');

class Log extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    super(x, y, height, width, color, dx, dxv);
  }

  drawLog(ctx) {
  let image = document.getElementById('log');
  ctx.drawImage(image, this.x, this.y, this.width, this.height)
  } 
}

module.exports = Log;