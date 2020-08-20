class Game {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.suelo = new Floor(20, 700, ctx);
    this.personaje = new Lucky(20, 500, ctx);
    this.enemigo = new Enemy(80, 300, ctx);
    // this.intervalGame = undefined;
  }
  // ------------------------------------------------

  gameDraw() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('myGame').style.display = 'inline';
    this.suelo.draw();
    this.personaje.draw();
    this.enemigo.draw();
  }

  assignControls() {
    // console.log('desde controles');
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 37:
          this.personaje.moveLeft();
          break;
        case 38:
          this.personaje.moveJump();
          break;
        case 39:
          this.personaje.moveRight();
          break;
        case 40:
          this.personaje.moveDown();
          break;
      }
    };
  }

  // ------------------------------------------------

  start() {
    // console.log('desde el motor');
    this.gameDraw();
    this.assignControls();
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }
  update() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.start();
  }
}
