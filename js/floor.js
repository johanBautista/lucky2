class Floor {
  constructor(x, y, ctx, width, height) {
    this.ctx = ctx;
    this.y = y;
    this.x = x;
  }

  draw() {
    // console.log('desde floor');
    ctx.beginPath();
    ctx.fillStyle = 'rgb(44,186,49)';
    ctx.fillRect(this.x, this.y, 700, 46);
    ctx.closePath();
  }
}
//
