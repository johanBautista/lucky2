class Lucky {
  constructor(x, y, ctx, enemigo) {
    this.ctx = ctx;
    this.y = y;
    this.x = x;
    this.gravity = 2;
    this.run = 0.5;
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
  gravedad() {
    this.y += this.gravity;
    this.x += this.run;
  }

  control() {
    this.draw();
    this.moveDown();
    this.moveJump();
    this.moveLeft();
    this.moveRight();
    this.gravedad();
  }
}
