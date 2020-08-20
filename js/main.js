document.onload = (function () {
  let canvas = document.getElementById('myGame');
  this.ctx = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 770;

  audioIntro();
  let intro = document.getElementById('startScreen');
  intro.addEventListener('click', function () {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('intro').style.display = 'inline';
  });

  let game;

  let start = document
    .getElementById('startBtn')
    .addEventListener('click', function () {
      game = new Game(ctx, canvas.width, canvas.height);
      // game.start();
      game.update();
    });
})();

function audioIntro() {
  console.log('audio del intro');
}
