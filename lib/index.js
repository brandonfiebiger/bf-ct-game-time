const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();
game.addCars();
game.addLogs();

function animate() {
  game.logs[0].draw(context);
  game.logs[0].moveRight();
  game.logs[1].draw(context);
  game.logs[1].moveLeft();
  game.logs[2].draw(context);
  game.logs[2].moveRight();
  game.logs[3].draw(context);
  game.logs[3].moveLeft();
  game.logs[4].draw(context);
  game.logs[4].moveRight();
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
      game.frog.frogDies();
    } 
  })
}

function logCollision() {
  game.logs.forEach(log => {
    if (log.isCollidingWith(game.frog) && log.isCollidingWith(game.water)) {
      game.frog.moveRight();
    } 
    
    if (game.frog.isCollidingWith(game.water) && !game.frog.isCollidingWith(log)) {
      game.frog.frogDies();
    }
  })
}

function gameLoop() {
  carCollision();
  logCollision();
  context.clearRect(0, 0, canvas.width, canvas.height);
  animate();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);