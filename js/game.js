class Game {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.floors = [];
  }
  start() {
    console.log('desde el motor');
    this.escenario();
  }

  escenario() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('myGame').style.display = 'inline';

    //
    var suelo = new Floor();
    suelo.draw();

    //
    var personaje = new Lucky();
    personaje.draw();
    //
    let enemigo = new Enemy();
    enemigo.draw();
  }
}
