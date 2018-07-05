module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx, dxv, img) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dxv = dxv;
  };

  draw(ctx) {
    const { x, y, height, width, color, dx, dxv, img } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  moveRight() {
      if (this.x < 600) {
      this.x += this.dx * this.dxv;
    } else if (this.x >= 600) {
      this.x = -200;
    }
  };

  moveLeft() {
    if (this.x > -200) {
      this.x -= this.dx * this.dxv;
    } else if (this.x === -200) {
      this.x = 700;
      this.x -= this.dx * this.dxv;
    }
  };

  frogLogMoveRight() {
    if (this.x < (600 - this.width)) {
      this.x += this.dx * this.dxv;
    } else if(this.x === (600 - this.width)) {
      this.x = (600 - this.width)
    }
  }
  frogLogMoveLeft() {
    if (this.x > 0) {
      this.x -= this.dx * this.dxv;
    } else if(this.x === 0) {
      this.x = 0
    }
  }

  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width || 
      this.y > object.y + object.height
    );
  }

  isNotCollidingWith(object) {
    return (
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width || 
      this.y > object.y + object.height
    );
  }
}