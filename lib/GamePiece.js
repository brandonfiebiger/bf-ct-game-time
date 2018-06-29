module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dxv = dxv;
  };

  draw(ctx) {
    const { x, y, height, width, color, dx, dxv } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  moveRight() {
      if (this.x < 700) {
      this.x += this.dx * this.dxv;
    } else if (this.x === 700) {
      this.x = 0;
      this.x += this.dx * this.dxv;
    }
  };

  moveLeft() {
    if (this.x > 0) {
      this.x -= this.dx * this.dxv;
    } else if (this.x === 0) {
      this.x = 700;
      this.x -= this.dx * this.dxv;
    }
  };

  // isCollidingWith(object) {
  //   return !(
  //     this.x + this.width < object.x ||
  //     this.y + this.height < object.y ||
  //     this.x > object.x + object.width || 
  //     this.y > object.y + object.height
  //   );
  // }



}