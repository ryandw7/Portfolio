import { Line, Block, RightJ, LeftJ, RightS, LeftS, Tpiece, Piece } from "./pieces.js";
import { COLS, ROWS, BLOCK_SIZE, gameOver } from "./constants.js";
import { Board } from "./board.js";
let canPressPlay = true;
const button = document.getElementById("play-button");


//main.js
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const upBtn = document.getElementById('up');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const downBtn = document.getElementById('down');
document.addEventListener('gesturestart', function (e) {
  e.preventDefault()
})

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
gameOver.hidden = true;
// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
ctx.fillStyle = 'blue';
async function play(ctx) {
  if(canPressPlay){
  canPressPlay = false;
  button.hidden = true;
  let board = new Board(ctx);
  upBtn.addEventListener('mousedown', ()=>{
    board.controls.up = true;
    console.log('true')
  });
  upBtn.addEventListener('mouseup', ()=>{
    board.controls.up = false;
    console.log('false')
  })
  leftBtn.addEventListener('mousedown', ()=>{
    board.controls.left = true;
    console.log('true')
  });
 leftBtn.addEventListener('mouseup', ()=>{
    board.controls.left = false;
    console.log('false')
  })
  downBtn.addEventListener('mousedown', ()=>{
    board.controls.down = true;
    console.log('true')
  });
  downBtn.addEventListener('mouseup', ()=>{
    board.controls.down = false;
    console.log('false')
  })
  rightBtn.addEventListener('mousedown', ()=>{
    board.controls.right = true;
    console.log('true')
  });
  rightBtn.addEventListener('mouseup', ()=>{
    board.controls.right = false;
    console.log('false')
  })
  board.checkBoard();
  }
}



button.onclick = () => {
  play(ctx);
   console.log('play')
}

// ctx.fillRect(6, 0, 1, 1);
//ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);


