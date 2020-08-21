class Game {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.suelo = new Floor(20, 700, ctx);
    this.background = new Background(5, 5, ctx);
    this.personaje = new Lucky(20, 500, ctx);
    this.enemigo = new Enemy(80, 300, ctx);
    this.intervalGame = undefined;
  }
  // ------------------------------------------------

  gameDraw() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('myGame').style.display = 'inline';
    this.suelo.control();
    this.background.control();
    this.personaje.control();
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

  colisionOver() {
    if (
      this.personaje.x < 5 ||
      this.personaje.x > 955 ||
      this.personaje.y < 5 ||
      this.personaje.y > 720
    ) {
      console.log('over limites');
      this.gameOver();
    }
    // else if (
    //   this.personaje.x === this.enemigo.x ||
    //   this.personaje.y === this.enemigo.y
    // ) {
    //   console.log('over enemigo');
    //   this.gameOver();
    // }
  }

  // ------------------------------------------------

  start() {
    this.update();
  }
  stop() {
    this.intervalGame = window.cancelAnimationFrame(
      this.intervalGame.bind(this), //marcaxx
    );
  }
  gameOver() {
    this.stop();
  }
  // ------------------------------------------------

  update() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.gameDraw();
    this.assignControls();
    this.colisionOver();
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }
}
