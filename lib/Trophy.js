const GamePiece = require('./GamePiece.js');

class Trophy extends GamePiece {
  constructor(x, y, height, width) {
    super();
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  drawTrophy(ctx) {
    let image = document.getElementById('frog');
    
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
  }
}




module.exports = Trophy;
