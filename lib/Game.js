const Frog = require('./Frog.js');
const GamePiece = require('./GamePiece.js');
const Log = require('./Log.js');
const Car = require('./Car.js');

class Game {
  constructor() {
    this.frog = new Frog();
    this.log1 = new Log(250, 50, 150, 40, 'rgb(148, 90, 48)', 1, .5);
    this.log2 = new Log(350, 100, 100, 40, 'rgb(148, 90, 48)', 1, .5);
    this.log3 = new Log(450, 150, 150, 40, 'rgb(148, 90, 48)', 1, .5);
    this.log4 = new Log(550, 200, 100, 40, 'rgb(148, 90, 48)', 1, .5);
    this.log5 = new Log(250, 250, 150, 40, 'rgb(148, 90, 48)', 1, .5);
  }
}

module.exports = Game;

