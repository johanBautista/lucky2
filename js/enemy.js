class Enemy {
  constructor(x, y, ctx) {}
  draw() {
    console.log('desde enemy');
    ctx.beginPath();
    ctx.fillStyle = '#a1143a';
    ctx.fillRect(100, 650, 40, 40);
    ctx.closePath();
  }
}