class Floor {
  constructor(x, y, ctx, width, height) {}

  draw() {
    console.log('desde floor');
    ctx.beginPath();
    ctx.fillStyle = 'rgb(44,186,49)';
    ctx.fillRect(20, 700, 700, 46);
    ctx.closePath();
  }
}
