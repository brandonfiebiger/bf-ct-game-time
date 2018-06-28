const GamePiece = require('./GamePiece.js');

class Log extends GamePiece{
  constructor(x, y, height, width, color, dx = 1) {
    super(350, 150, 10, 10, 'rgb(148, 90, 48)', 1)
  }
}

module.exports = Log