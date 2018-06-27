const Frog = require('./Frog.js');
const GamePiece = require('./GamePiece.js');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');

// context.fillStyle = 'rgba(0, 255, 0, 1)';
// context.fillRect(50, 50, 10, 10);

const frog = new Frog();
frog.draw(context);
const gameLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);