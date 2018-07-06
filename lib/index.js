const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();

var paused = false;

game.addCarRows();
game.addLogRows();
game.addWinArea();

function animate() {
  game.drawBackground(context);
  game.drawWater(context);
  game.drawStreet(context);
  game.drawPurpleGrass(context);
  game.drawGreenGrass(context);
  game.drawLogs(context);
  game.drawCars(context);
  game.drawScore(context);
  game.drawLives(context);
  game.grassLanding(context);
  game.drawFrogTrophies(context);
  game.frog.drawFrog(context);
}

function pauseText(ctx) {
  if (paused) {
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillText(`PAUSED`, 250, 410);
  }
}


function gameLoop() {
  // game.newLevel();
  if (!paused) {
    game.waterCollision();
    game.carCollision();
    game.logCollision();
    game.gameOver();
    context.clearRect(0, 0, canvas.width, canvas.height);
    animate();
    // return
  }
  requestAnimationFrame(gameLoop);
}

window.onkeydown = function keyFunctions(e) {
  e.preventDefault();
  switch (e.keyCode) {
  case 37:
    game.frog.hopLeft();
    break;
  case 38:
    game.frog.hopUp();
    break;
  case 39:
    game.frog.hopRight();
    break;
  case 40:
    game.frog.hopDown();
    break;
  case 82:
    location.reload();
    break;
  case 80:
    paused = !paused;
    pauseText(context);
    break;
  }
};


requestAnimationFrame(gameLoop);
