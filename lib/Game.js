const Frog = require('./Frog.js');
const frog = new Frog();
const Log = require('./Log.js');
const Car = require('./Car.js');
const Trophy = require('./Trophy.js');
const Water = require('./Water.js');
const GreenGrass = require('./GreenGrass.js');
const Score = require('./Score.js');
const score = new Score();
const Lives = require('./Lives.js');
const lives = new Lives();

class Game {
  constructor() {
    this.frog = new Frog();
    this.water = new Water();
    this.cars = [];
    this.logs = [];
    this.grass = [];
    this.logRows = [];
    this.carRows = [];
    this.frogTrophies = [];
  };

  togglePause() {
    if (!paused) {
        paused = true;
    } else if (paused) {
       paused= false;
    }
  }


  drawFrogTrophies(context) {
    this.frogTrophies.forEach(trophy => {
      trophy.drawTrophy(context);
    })
  }

  drawLogs(context) {
    this.logs.forEach(log => {
      log.drawLog(context);
      if (log.y === 125 || log.y === 225 || log.y === 325) {
        log.moveRight();
      } else {
        log.moveLeft();
        }
    })
  };

  drawCars(context) {
    this.cars.forEach(car => {
      car.drawCar(context);
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
    ctx.fillRect(0, 0, 600, 550);
  };

  drawPurpleGrass(ctx) {
    let image = document.getElementById('purple-grass');
    ctx.drawImage(image, 0, 375, 600, 51)
    ctx.drawImage(image, 0, 675, 600, 50)
  };

  drawGreenGrass(ctx) {
    let image = document.getElementById('green-grass');
    ctx.drawImage(image, 0, 55, 600, 60)
  };

  addCarRows() {
    if (this.cars.length == 5) {
      return
    }
      let x = -200
      let y = 380
      for (let i = 0; i < 5; i++) {
        y += 50
        let newCar = new Car(x, y, 43, 50, 'rgb(14, 15, 117)', 1, 1.5)
        this.carRows.push(newCar)
        this.cars.push(newCar)
      }
    this.generateCars(); 
  };

  generateCars() {
    for (let i = 1; i < 5; i++) {
      this.carRows.forEach(car => {
        let newCar = new Car(car.x + car.width * (4*i), car.y, 43, 50, 'rgb(14, 15, 117)', 1, 1.5)
        this.cars.push(newCar)
      })
    }
    console.log(this.cars)
  };
  
  addLogRows() {
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
    for (let i = 1; i < 3; i++) {
      this.logRows.forEach(log => {
        let newLog = new Log(log.x + log.width * (2*i), log.y, 43, 125, 'rgb(148, 90, 48)', 1, 2.5)
        this.logs.push(newLog)
      })
    }
    console.log(this.logs)
  }
  
  addWinArea() {
    let x = -105;
    for (let i = 0; i < 5; i++) {
    this.grass.push(new GreenGrass(x += 125, 77, 45, 50));  
    }
  }

  carCollision() {
  this.cars.forEach(car => {
      if (car.isCollidingWith(this.frog)) {
        this.frog.frogDies(lives);
        score.points -= 20
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
        this.frog.frogDies(lives);
        score.points -= 20;
      }
    }
  };

  grassLanding(ctx) {
    this.grass.forEach(grassPatch => {
      if (this.frog.isCollidingWith(grassPatch)) {
          this.frogTrophies.push(new Trophy(grassPatch.x += 15, grassPatch.y += 5, 30, 30, 'rgb(0, 0, 255)'));
          this.frog.x = 350;
          this.frog.y = 680;
          score.points += 200;
          this.oneUp();
      }
    })
  }

  addWinArea() {
    let x = -105;
    for (let i = 0; i < 5; i++) {
    this.grass.push(new GreenGrass(x += 125, 67, 35, 35, 'rgb(255, 3, 0)'));  
    }
  }

  drawScore(ctx) {
    ctx.font = '48px serif';
    ctx.fillStyle =  'rgb(0, 255, 255'
    ctx.fillText(`Score: ${score.points}`, 10, 50);
  }

  drawLives(ctx) {
    ctx.font = '48px serif';
    ctx.fillStyle =  'rgb(0, 255, 255'
    ctx.fillText(`Lives: ${lives.life}`, 400, 50,);
  };

  oneUp() {
    if (score.points >= 1000) {
      lives.life += 1;
    }
  }

  gameOver() {
    if (lives.life === 0) {
      frog.frogDies(lives);
      lives.life = 3;
      score.points = 0;
      for (let i = 0; i < 5; i++){
        this.frogTrophies.shift();
      }
      
    }
  }
};
  
module.exports = Game;

