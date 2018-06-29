const Frog = require('./Frog.js');
const GamePiece = require('./GamePiece.js');
const Log = require('./Log.js');
const Car = require('./Car.js');

class Game {
  constructor() {
    this.frog = new Frog();
    this.log1 = new Log(250, 50, 40, 150, 'rgb(148, 90, 48)', 1, .5);
    this.log2 = new Log(350, 100, 40, 100, 'rgb(148, 90, 48)', 1, .5);
    this.log3 = new Log(450, 150, 40, 150, 'rgb(148, 90, 48)', 1, .5);
    this.log4 = new Log(550, 200, 40, 100, 'rgb(148, 90, 48)', 1, .5);
    this.log5 = new Log(250, 250, 40, 150, 'rgb(148, 90, 48)', 1, .5);
    this.car1 = new Car(50, 450, 40, 150, 'rgb(14, 185, 117)', 1, .5);
    this.car2 = new Car(200, 500, 40, 100, 'rgb(14, 185, 117)', 1, .5);
    this.car3 = new Car(350, 300, 40, 150, 'rgb(14, 185, 117)', 1, .5);
    this.car4 = new Car(500, 350, 40, 100, 'rgb(14, 185, 117)', 1, .5);
    this.car5 = new Car(250, 400, 40, 150, 'rgb(14, 185, 117)', 1, .5);
  }
}

module.exports = Game;

