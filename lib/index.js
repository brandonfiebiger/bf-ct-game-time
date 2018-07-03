const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const ScoreAndLives = require('./Score.js');
const scoreAndLives = new ScoreAndLives();
const game = new Game();
game.addCars();
game.addLogs();

function animate() {
  game.drawWater(context)
  game.drawStreet(context)
  game.drawPurpleGrass(context)
  // game.rightLogs[0].draw(context);
  // game.rightLogs[0].moveRight();
  // game.leftLogs[0].draw(context);
  // game.leftLogs[0].moveLeft();
  // game.rightLogs[1].draw(context);
  // game.rightLogs[1].moveRight();
  // game.leftLogs[1].draw(context);
  // game.leftLogs[1].moveLeft();
  // game.rightLogs[2].draw(context);
  // game.rightLogs[2].moveRight();
  game.logs.forEach(log => {
    log.draw(context);
    if (log.y === 125 || log.y === 225 || log.y === 325) {
      log.moveRight();
    } else {
      log.moveLeft();
    }
  })

  game.cars.forEach(car => {
    car.draw(context);
    if (car.y === 430 || car.y === 530 || car.y === 630) {
      car.moveRight();
    } else {
      car.moveLeft();
    }
  })
  scoreAndLives.scoreDraw(context);
  game.frog.drawFrog(context);
}

window.onkeydown = function frogMovement(e) {
  e.preventDefault()
  switch(e.keyCode) {
    case 37:
    game.frog.hopLeft();
    break
    case 38:
    game.frog.hopUp(scoreAndLives);
    scoreAndLives.points += 10;
    break
    case 39:
    game.frog.hopRight();
    break
    case 40:
    game.frog.hopDown();
    break
  }
};

function carCollision() {
  game.cars.forEach(car => {
    if (car.isCollidingWith(game.frog)) {
      game.frog.frogDies(scoreAndLives);
    } 
  })
}

function logCollision() {
  game.logs.forEach(log => {
  if (log.y === 125 || log.y === 225 || log.y === 325) {
    if (log.isCollidingWith(game.frog)) {
      game.frog.frogLogMoveRight();
    } 
  } else {
    if (log.isCollidingWith(game.frog)) {
      game.frog.frogLogMoveLeft();
    }
  }})
}

function waterCollision() {
  var includesLog = game.logs.find((log) => game.frog.isCollidingWith(log))
  if(game.frog.isCollidingWith(game.water)) {
    if (game.logs.includes(includesLog)) {
      return
    } else {
      game.frog.frogDies(scoreAndLives);
    }
  }
}

function gameLoop() {
  scoreAndLives.gameOver(game.frog);
  waterCollision();
  carCollision();
  logCollision();
  context.clearRect(0, 0, canvas.width, canvas.height);
  animate();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);