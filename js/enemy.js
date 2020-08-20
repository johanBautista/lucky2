class Enemy {
  constructor(x, y, ctx) {
    this.ctx = ctx;
    this.y = y;
    this.x = x;
  }
  draw() {
    // console.log('desde enemy');
    ctx.beginPath();
    ctx.fillStyle = '#a1143a';
    ctx.fillRect(this.x, this.y, 40, 40);
    ctx.closePath();
  }
}
// 