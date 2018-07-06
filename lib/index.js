const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();

var paused = false;
var gameover = false;

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

function pauseText() {
  if (paused) {
    context.fillStyle = 'rgb(0, 255, 0)';
    context.fillText(`PAUSED`, 220, 410);
  }
}

requestAnimationFrame(function gameLoop() {
  // game.newLevel();
    if (paused) {
      pauseText();
    } else if (game.gameOver) {
      context.fillStyle = 'rgb(0, 0, 0)';
      context.fillRect (0, 0, 600, 720);
      context.font = '48px serif';
      context.fillStyle = 'rgb(13, 188, 121)';
      context.fillText(`Game Over`, 200, 350);
      context.fillStyle = 'rgb(13, 188, 121)';
      context.fillText(`Press R to Replay`, 140, 400);
    } else {
      game.waterCollision();
      game.carCollision();
      game.logCollision();
      game.checkGameOver();
      context.clearRect(0, 0, canvas.width, canvas.height);
      animate();
    }

  requestAnimationFrame(gameLoop);
});

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
