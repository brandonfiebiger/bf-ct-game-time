const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();
// const Frog = require('./Frog.js')
// const Car = require('./Car.js');
// const Log = require('./Log.js');
// const frog = new Frog();
// const log = new Log();
// const car = new Car();

function animate() {
  game.log1.draw(context);
  game.log1.moveRight();
  game.log2.draw(context);
  game.log2.moveLeft();
  game.log3.draw(context);
  game.log3.moveRight();
  game.log4.draw(context);
  game.log4.moveLeft();
  game.log5.draw(context);
  game.log5.moveRight();
  game.car1.draw(context);
  game.car1.moveRight();
  game.car2.draw(context);
  game.car2.moveLeft();
  game.car3.draw(context);
  game.car3.moveRight();
  game.car4.draw(context);
  game.car4.moveLeft();
  game.car5.draw(context);
  game.car5.moveRight();
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

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  animate();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);