const Frog = require('./Frog.js');
const Log = require('./Log.js');
const Car = require('./Car.js');
const Water = require('./Water.js');

class Game {
  constructor() {
    this.frog = new Frog();
    this.water = new Water();
    this.cars = [];
    this.leftLogs = [];
    this.rightLogs = [];
  }
  addCars() {
    var car1 = new Car(-150, 562.5, 35, 150, 'rgb(14, 15, 117)', 1, .5);
    this.cars.push(car1)
    var car2 = new Car(200, 525, 35, 100, 'rgb(14, 15, 117)', 1, .5);
    this.cars.push(car2)
    var car3 = new Car(350, 487.5, 35, 150, 'rgb(14, 185, 117)', 1, .5);
    this.cars.push(car3)
    var car4 = new Car(500, 450, 35, 100, 'rgb(14, 185, 117)', 1, .5);
    this.cars.push(car4)
    var car5 = new Car(-250, 412.5, 35, 150, 'rgb(14, 185, 117)', 1, .5);
    this.cars.push(car5)
  }
  addLogs() {
    var log1 = new Log(250, 123, 48.4, 150, 'rgb(148, 90, 48)', 1, .5);
    this.rightLogs.push(log1)
    var log2 = new Log(350, 168.4, 48.4, 100, 'rgb(148, 90, 48)', 1, .5);
    this.leftLogs.push(log2)
    var log3 = new Log(450, 213.8, 48.4, 150, 'rgb(148, 90, 48)', 1, .5);
    this.rightLogs.push(log3)
    var log4 = new Log(550, 259.2, 48.4, 100, 'rgb(148, 90, 48)', 1, .5);
    this.leftLogs.push(log4)
    var log5 = new Log(250, 307.6, 48.4, 150, 'rgb(148, 90, 48)', 1, .5);
    this.rightLogs.push(log5)
  }
}


module.exports = Game;

