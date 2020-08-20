class Lucky {
  constructor(x, y, ctx) {
    this.ctx = ctx;
    this.y = y;
    this.x = x;
  }
  draw() {
    // console.log('desde lucky');
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.fillRect(this.x, this.y, 40, 40);
    ctx.closePath();
  }
  moveRight() {
    this.x += 20;
    // console.log('lucky derecha');
  }
  moveLeft() {
    this.x -= 20;
    // console.log('lucky izquierda');
  }
  moveJump() {
    this.y -= 50;
  }
  moveDown() {
    this.y += 50;
  }
}
