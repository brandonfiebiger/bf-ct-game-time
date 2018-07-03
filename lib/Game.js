const Frog = require('./Frog.js');
const Log = require('./Log.js');
const Car = require('./Car.js');
const Water = require('./Water.js');

class Game {
  constructor() {
    this.frog = new Frog();
    this.water = new Water();
    this.cars = [];
    this.logs = [];
  };

  drawWater(ctx) {
    ctx.fillStyle = 'rgb(0, 2, 68)';
    ctx.fillRect(0, 120, 600, 255);
  };

  drawStreet(ctx) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 425, 600, 255);
  };

  drawPurpleGrass(ctx) {
    let image = document.getElementById('purple-grass');
    ctx.drawImage(image, 0, 375, 600, 51)
  }

  addCars() {
    let x = -200
    let y = 380
    for (let i = 0; i < 5; i++) {
      this.cars.push(new Car(x, y += 50, 43, 100, 'rgb(14, 15, 117)', 1, 2.5))
      for (let i = 0; i < 5; i++) {
        this.cars.push(new Car(x += 100, y, 43, 50, 'rgb(14, 15, 117)', 1, 2.5))
      }
    }
  }

  addLogs() {
    let x = -200
    let y = 75
    for (let i = 0; i < 5; i++) {
      this.logs.push(new Log(x, y += 50, 43, 75, 'rgb(148, 90, 48)', 1, 2.5))
      for (let i = 0; i < 5; i++) {
        this.logs.push(new Log(x += 100, y, 43, 75, 'rgb(148, 90, 48)', 1, 2.5))
      }
    }
  }
}

//   addLogs() {
//     var log1 = new Log(250, 125, 43, 150, 'rgb(148, 90, 48)', 1, 2.5);
//     this.logs.push(log1)
//     var log12 = new Log(50, 125, 43, 150, 'rgb(148, 90, 48)', 1, 2.5);
//     this.logs.push(log12)
//     var log2 = new Log(350, 175, 43, 100, 'rgb(148, 90, 48)', 1, 2.5);
//     this.logs.push(log2)
//     var log3 = new Log(450, 225, 43, 150, 'rgb(148, 90, 48)', 1, 2.5);
//     this.logs.push(log3)
//     var log4 = new Log(550, 275, 43, 100, 'rgb(148, 90, 48)', 1, 2.5);
//     this.logs.push(log4)
//     var log5 = new Log(250, 325, 43, 150, 'rgb(148, 90, 48)', 1, 2.5);
//     this.logs.push(log5)
//   }
// }




module.exports = Game;

