const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const ScoreAndLives = require('./Score.js');
const scoreAndLives = new ScoreAndLives();
const game = new Game();
game.addCars();
game.addLogs();
game.addWinArea();

function animate() {
  game.drawBackground(context)
  game.drawWater(context)
  game.drawStreet(context)
  game.drawPurpleGrass(context)
  game.drawGreenGrass(context)
  game.drawLogs(context)
  game.drawCars(context)
  scoreAndLives.scoreDraw(context);
  game.frog.drawFrog(context);
}


function gameLoop() {
  scoreAndLives.gameOver(game.frog);
  game.grassLanding();
  game.waterCollision();
  game.carCollision();
  game.logCollision();
  context.clearRect(0, 0, canvas.width, canvas.height);
  animate();
  requestAnimationFrame(gameLoop);
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

requestAnimationFrame(gameLoop);
