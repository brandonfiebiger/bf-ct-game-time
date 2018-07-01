const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();
game.addCars();
game.addLogs();

function animate() {
  game.rightLogs[0].draw(context);
  game.rightLogs[0].moveRight();
  game.leftLogs[0].draw(context);
  game.leftLogs[0].moveLeft();
  game.rightLogs[1].draw(context);
  game.rightLogs[1].moveRight();
  game.leftLogs[1].draw(context);
  game.leftLogs[1].moveLeft();
  game.rightLogs[2].draw(context);
  game.rightLogs[2].moveRight();
  game.cars[0].draw(context);
  game.cars[0].moveRight();
  game.cars[1].draw(context);
  game.cars[1].moveLeft();
  game.cars[2].draw(context);
  game.cars[2].moveRight();
  game.cars[3].draw(context);
  game.cars[3].moveLeft();
  game.cars[4].draw(context);
  game.cars[4].moveRight();
  game.frog.draw(context);
}

window.onkeydown = function frogMovement(e) {
  e.preventDefault()
  switch(e.keyCode) {
    case 37:
    game.frog.moveFrogLeft();
    break
    case 38:
    game.frog.moveFrogUp();
    break
    case 39:
    game.frog.moveFrogRight();
    break
    case 40:
    game.frog.moveFrogDown();
    break
  }
};

function carCollision() {
  game.cars.forEach(car => {
    if (car.isCollidingWith(game.frog)) {
      game.frog.frogDies(car);
    } 
  })
}

function logCollision() {
  game.rightLogs.forEach(log => {
    if (log.isCollidingWith(game.frog)) {
      game.frog.moveRight();
    } 
  })
  game.leftLogs.forEach(log => {
    if (log.isCollidingWith(game.frog)) {
      game.frog.moveLeft();
    }
  })
}

function waterCollision() {
  var allLogs = [...game.rightLogs, ...game.leftLogs];
  var includesLog = allLogs.find((log) => game.frog.isCollidingWith(log))
  if(game.frog.isCollidingWith(game.water)) {
    if (allLogs.includes(includesLog)) {
      return
    } else {
      game.frog.frogDies();
    }
  }
}

function gameLoop() {
  waterCollision();
  carCollision();
  logCollision();
  context.clearRect(0, 0, canvas.width, canvas.height);
  animate();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);