class Background {
  constructor(x, y, ctx, width, height) {
    this.ctx = ctx;
    this.y = y;
    this.x = x;
  }

  draw() {
    // console.log('desde floor');
    ctx.beginPath();
    ctx.fillStyle = '#1491a1';
    ctx.fillRect(this.x, this.y, 1700, 600);
    ctx.closePath();
  }

  moveLeft() {
    this.x -= 2;
    // console.log("pingucamnia");
  }

  control() {
    this.draw();
    this.moveLeft();
  }
}
//
