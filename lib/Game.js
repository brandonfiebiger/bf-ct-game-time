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
  drawWater(ctx) {
    ctx.fillStyle = 'rgb(0, 2, 68)';
    ctx.fillRect(0, 120, 600, 255);
  }

  drawPurpleGrass(ctx) {
    let image = document.getElementById('purple-grass');
    ctx.drawImage(image, 0, 375, 600, 50)
  }

  drawStreet(ctx) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 420, 600, 255);
  }
  pushCars() {
    let x = 75;
    for (let i = 0; i < 5; i++) {
      this.cars.push(new Car(x -= 200, 430, 43, 75, 'rgb(14, 15, 117)', 1, 222.5))
    } 
  }

  pushLogs() {
    let x = 150;
    for (let i = 0; i < 5; i++) {
      this.rightLogs.push(new Log(x -= 200, 325, 43, 150, 'rgb(148, 90, 48)', 1, 2.5))
    } 
  }
  // addCars() {
  //   var car1 = new Car(-150, 430, 43, 150, 'rgb(14, 15, 117)', 1, 2.5);
  //   this.cars.push(car1)
  //   var car2 = new Car(200, 480, 43, 100, 'rgb(14, 15, 117)', 1, 2.5);
  //   this.cars.push(car2)
  //   var car3 = new Car(350, 520, 43, 150, 'rgb(14, 185, 117)', 1, 2.5);
  //   this.cars.push(car3)
  //   var car4 = new Car(500, 570, 43, 100, 'rgb(14, 185, 117)', 1, 2.5);
  //   this.cars.push(car4)
  //   var car5 = new Car(-250, 620, 43, 150, 'rgb(14, 185, 117)', 1, 2.5);
  //   this.cars.push(car5)
  // }
//   addLogs() {
//     var log1 = new Log(250, 125, 43, 150, 'rgb(148, 90, 48)', 1, 2.5);
//     this.rightLogs.push(log1)
//     var log2 = new Log(350, 175, 43, 100, 'rgb(148, 90, 48)', 1, 2.5);
//     this.leftLogs.push(log2)
//     var log3 = new Log(450, 225, 43, 150, 'rgb(148, 90, 48)', 1, 2.5);
//     this.rightLogs.push(log3)
//     var log4 = new Log(550, 275, 43, 100, 'rgb(148, 90, 48)', 1, 2.5);
//     this.leftLogs.push(log4)
//     var log5 = new Log(250, 325, 43, 150, 'rgb(148, 90, 48)', 1, 2.5);
//     this.rightLogs.push(log5)
//   }
// }
}

module.exports = Game;

