window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;

var square = function(){
  var x = 10;
  var y = 10;
  var width = 50;
  var height = 50;

  var speed = { x: 1, y: 1};

  function moveX(){
    this.x = this.x + speed.x;
    if(speed.x == 1 && this.x + this.width > canvas.width){
      speed.x = -1;
    }else if(speed.x == -1 && this.x<0){
      speed.x = 1;
    }
  };

  function moveY(){
    this.y = this.y + speed.y;
    if(speed.y == 1 && this.y + this.height > canvas.height){
      speed.y = -1;
    }else if(speed.y == -1 && this.y<0){
      speed.y = 1;
    }
  };

  return {
    x:x,
    y:y,
    width:width,
    height:height,
    moveX: moveX,
    moveY: moveY
  }
};

var character = square();

function initCanvas() {
  window.canvas = document.getElementById('miCanvas');
  window.ctx = canvas.getContext('2d');
}

function draw() {
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.fillRect(character.x, character.y, character.width, character.height);
}

function readInputs() {
}

function update() {
  character.moveX();
  character.moveY();
}

function gameLoop() {
  readInputs();
  update();
  draw();
  
  requestAnimationFrame(gameLoop);
}


window.onload = function() {
  initCanvas();
  requestAnimationFrame(gameLoop);
};


