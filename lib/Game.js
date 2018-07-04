const Frog = require('./Frog.js');
const frog = new Frog();
const Log = require('./Log.js');
const Car = require('./Car.js');
const Water = require('./Water.js');
const ScoreAndLives = require('./Score.js');
const scoreAndLives = new ScoreAndLives();


class Game {
  constructor() {
    this.frog = new Frog();
    this.water = new Water();
    this.cars = [];
    this.logs = [];
    this.logRows = []
  };

  drawLogs(context) {
    this.logs.forEach(log => {
      if (log.y === 125 || log.y === 225 || log.y === 325) {
        log.moveRight();
      } else {
        log.moveLeft();
      }
      log.draw(context);
    })
  };

  drawCars(context) {
    this.cars.forEach(car => {
      car.draw(context);
      if (car.y === 430 || car.y === 530 || car.y === 630) {
        car.moveRight();
      } else {
        car.moveLeft();
      }
    })
  };

  drawWater(ctx) {
    ctx.fillStyle = 'rgb(0, 2, 500)';
    ctx.fillRect(0, 120, 600, 255);
  };

  drawStreet(ctx) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 425, 600, 255);
  };

  drawBackground(ctx) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, 600, 700);
  };

  drawPurpleGrass(ctx) {
    let image = document.getElementById('purple-grass');
    ctx.drawImage(image, 0, 375, 600, 51)
  };

  drawGreenGrass(ctx) {
    let image = document.getElementById('green-grass');
    ctx.drawImage(image, 0, 55, 600, 60)
  };

  addCars() {
    let x = -200
    let y = 380
    for (let i = 0; i < 5; i++) {
      this.cars.push(new Car(x, y += 50, 43, 100, 'rgb(14, 15, 117)', 1, 3.5))
      for (let i = 0; i < 5; i++) {
        this.cars.push(new Car(x += 100, y, 43, 50, 'rgb(14, 15, 117)', 1, 3.5))
      }
    }
  };

  addLogs() {
    if (this.logs.length == 5) {
      return
    }
      let x = -200
      let y = 75
      for (let i = 0; i < 5; i++) {
        y += 50
        let newLog = new Log(x, y, 43, 75, 'rgb(148, 90, 48)', 1, 2.5)
        this.logRows.push(newLog)
        this.logs.push(newLog)
      }
    this.generateLogs();
  };
    
    generateLogs() {
      for (let i = 1; i < 5; i++) {
        this.logRows.forEach(log => {
          let newLog = new Log(log.x + log.width * (2*i), log.y, 43, 75, 'rgb(148, 90, 48)', 1, 2.5)
          this.logs.push(newLog)
        })
      }
    }
    
  carCollision() {
  this.cars.forEach(car => {
      if (car.isCollidingWith(this.frog)) {
        this.frog.frogDies(scoreAndLives);
      } 
    })
  };
  
  logCollision() {
    this.logs.forEach(log => {
      if (log.y === 125 || log.y === 225 || log.y === 325) {
        if (log.isCollidingWith(this.frog)) {
          this.frog.frogLogMoveRight();
        } 
      } else {
        if (log.isCollidingWith(this.frog)) {
          this.frog.frogLogMoveLeft();
        }
    }})
  };
      
  waterCollision() {
    var includesLog = this.logs.find((log) => this.frog.isCollidingWith(log))        
    if(this.frog.isCollidingWith(this.water)) {
      if (this.logs.includes(includesLog)) {
        return
      } else {
        this.frog.frogDies(scoreAndLives);
      }
    }
  };
};
  
      
      
      
      
module.exports = Game;

