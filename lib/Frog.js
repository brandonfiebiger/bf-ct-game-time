const GamePiece = require('./GamePiece.js');

class Frog extends GamePiece  {
  constructor(x, y, height, width, color) {
    super(50, 500, 10, 10, 'rgb(14, 185, 117)', 1);
   
  }
}


module.exports = Frog;