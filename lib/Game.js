const Frog = require('./Frog.js');
const Log = require('./Log.js');
const Car = require('./Car.js');

class Game {
  constructor() {
    this.frog = new Frog();
    this.cars = [];
    this.logs = [];
    // this.log1 = new Log(250, 123, 42.4, 150, 'rgb(148, 90, 48)', 1, .5);
    // this.log2 = new Log(350, 168.4, 42.4, 100, 'rgb(148, 90, 48)', 1, .5);
    // this.log3 = new Log(450, 213.8, 42.4, 150, 'rgb(148, 90, 48)', 1, .5);
    // this.log4 = new Log(550, 259.2, 42.4, 100, 'rgb(148, 90, 48)', 1, .5);
    // this.log5 = new Log(250, 304.6, 42.4, 150, 'rgb(148, 90, 48)', 1, .5);
  }
  addCars() {
    var car1 = new Car(50, 562.5, 35, 150, 'rgb(14, 185, 117)', 1, .5);
    this.cars.push(car1)
    var car2 = new Car(200, 525, 35, 100, 'rgb(14, 185, 117)', 1, .5);
    this.cars.push(car2)
    var car3 = new Car(350, 487.5, 35, 150, 'rgb(14, 185, 117)', 1, .5);
    this.cars.push(car3)
    var car4 = new Car(500, 450, 35, 100, 'rgb(14, 185, 117)', 1, .5);
    this.cars.push(car4)
    var car5 = new Car(250, 412.5, 35, 150, 'rgb(14, 185, 117)', 1, .5);
    this.cars.push(car5)
  }
  addLogs() {
    var log1 = new Log(250, 123, 42.4, 150, 'rgb(148, 90, 48)', 1, .5);
    this.logs.push(log1)
    var log2 = new Log(350, 168.4, 42.4, 100, 'rgb(148, 90, 48)', 1, .5);
    this.logs.push(log2)
    var log3 = new Log(450, 213.8, 42.4, 150, 'rgb(148, 90, 48)', 1, .5);
    this.logs.push(log3)
    var log4 = new Log(550, 259.2, 42.4, 100, 'rgb(148, 90, 48)', 1, .5);
    this.logs.push(log4)
    var log5 = new Log(250, 307.6, 42.4, 150, 'rgb(148, 90, 48)', 1, .5);
    this.logs.push(log5)
  }
}


module.exports = Game;

