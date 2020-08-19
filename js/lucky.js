class Lucky {
  constructor(x, y, ctx) {}
  draw() {
    console.log('desde lucky');
    ctx.beginPath();
    ctx.fillStyle = '#1d698b';
    ctx.fillRect(20, 650, 40, 40);
    ctx.closePath();
  }
}
