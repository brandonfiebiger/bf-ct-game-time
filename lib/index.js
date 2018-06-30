const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();

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

const carCollision = () => {
    if ((game.car1 || game.car2 || game.car3 || game.car4 || game.car5).isCollidingWith(game.frog)) {
      game.frog.frogDies();
    }
  }

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  animate();
  carCollision;
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);