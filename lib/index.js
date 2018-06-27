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
  log.move();
  car.draw(context);
  car.move();

}

window.addEventListener('keydown', arrowMovement);
  
function arrowMovement(e) {
  if (e.keycode === 37) {
    console.log('shitfart');
    //move left
  } else if (e.keycode === 38) {
    //move up
  } else if (e.keycode === 39) {
    //move right
  } else if (e.keycode === 40) {
    //move down
  }
};

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  animate();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);