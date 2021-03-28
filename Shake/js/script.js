const width = 600;
const height = 600;

const canvas = document.querySelector("#game");
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext("2d"); // Даем понять что тут будут 2д движухи

const BG = new Image();
BG.src ='img/BG.svg';

const boxSize = 30;

const snake = {
  dirX: 0,
  dirY: 0,
  body: [{ x: 5, y: 5 }],
  updateSnakeHeader: () => {
    console.log('update')
    console.log(snake.body[0])
   
    // snake.body[0].y += snake.dirY;
    if(snake.body[0].x === width/boxSize) {
      snake.body[0].x = 0;
    } else {
      snake.body[0].x += snake.dirX;
    }

    if(dirY < 0) {
      if(snake.body[0].y === height/boxSize-1) {
        snake.body[0].y = 0;
      } else {
        snake.body[0].y += snake.dirY;
      }
    } else {
      if(snake.body[0].y === 0) {
        snake.body[0].y = height/boxSize-1;
      } else if(snake.body[0].y === height/boxSize-1){
        snake.body[0].y += snake.dirY;
      }
    }
  },
};

const drawBg = () => {
 ctx.drawImage(BG, 0, 0);
  // ctx.beginPath();
  // ctx.rect(0, 0, width, height);
  // ctx.fillStyle = "white";
  // ctx.fill();
};

const drawSnake = () => {
  snake.body.forEach((item) => {
    ctx.beginPath();
    ctx.rect(item.x * boxSize, item.y * boxSize, boxSize, boxSize);
    ctx.fillStyle = "#F22727";
    ctx.fill();
  });
};



const updateSnakeDir = (dir) => {
  
  if (dir === 'left') {
    snake.dirX = -1;
    snake.dirY = 0;
  };
  if (dir === 'right') {
    snake.dirX = 1;
    snake.dirY = 0;
  };
  if (dir === 'up') {
    snake.dirX = 0;
    snake.dirY = -1;
  };
  if (dir === 'down') {
    snake.dirX = 0;
    snake.dirY = 1;
  };
    
  }


const draw = () => {
  drawBg();
  drawSnake();
  snake.updateSnakeHeader();
};

setInterval(draw, 1000 / 10);

let dir;
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 65) {
    updateSnakeDir('left')
  } else if (e.keyCode === 87) {
    updateSnakeDir('up')
  } else if (e.keyCode === 68) {
    updateSnakeDir('right')
  } else if (e.keyCode === 83) {
    updateSnakeDir('down')
  }
});



