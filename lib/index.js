console.log(window);
const Frog = require('./Frog.js')
const Game = require('./Game.js')
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Car = require('./Car.js');
const Log = require('./Log.js');
const frog = new Frog();
const log = new Log();
const car = new Car();

function animate() {
  log.draw(context);
  log.moveRight();
  car.draw(context);
  car.moveLeft();
  frog.draw(context);
}

// drawFrog()

// // function drawFrog() {
// //   console.log('hi')
// //   frog.draw(context)
// }
window.onkeydown = function arrowMovement(e) {
  e.preventDefault()
  switch(e.keyCode) {
    case 37:
    frog.x -= frog.width
    break
    frog.move()
    case 38:
    frog.y -= frog.height
    break
    case 39:
    frog.x += frog.width
    break
    case 40:
    frog.y += frog.width
    break
  }
};

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  animate();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);