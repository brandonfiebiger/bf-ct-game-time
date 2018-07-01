class Score {
  constructor() {
    this.points = 0;
  }

 scoreDraw(ctx) {
  ctx.font = '48px serif';
  ctx.fillText(`Score: ${this.points}`, 10, 50);
 }
}

module.exports = Score;