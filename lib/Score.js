class ScoreAndLives {
  constructor() {
    this.points = 0;
    this.lives = 3;
  };

 scoreDraw(ctx) {
  ctx.font = '48px serif';
  ctx.fillText(`Score: ${this.points}`, 10, 50);
  ctx.fillText(`Lives: ${this.lives}`, 400, 50);
 };

 gameOver(frog) {
  if (this.lives === 0) {
    this.lives = 3;
    this.points = 0;
    frog.x = 350;
    frog.y = 639;
  }
 }
};

module.exports = ScoreAndLives;