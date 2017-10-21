const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);



const matrix = [
  [0,0,0],
  [1,1,1],
  [0,1,0],
];

function draw() {
  context.fillStyle = '#000';
  context.fillRect(0,  0, canvas.width, canvas.height);

  drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix , offset) {
  matrix.forEach ((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = 'red';
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    })
  })
}

let lastTime = 0
function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;
  console.log(deltaTime);
  draw();
  requestAnimationFrame(update);
};



const player = {
  pos: {x : 5, y : 5},
  matrix: matrix
}

update();
