// Geometry Run
// Sami, Natan
// Nov 27, 2024

let charSize = 100;
let jumpStatus = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  drawPlayer();
  runGravity();
}

function drawPlayer(){
  let charY = windowHeight - charSize;

  rectMode(CORNER);
  fill(50, 200, 50)
  rect(windowWidth/4, charY, charSize, charSize); //main body
}

function runGravity(){
  if(keyIsDown(32) === true){ //checking for spacebar press
    jumpStatus = true;
  }

  if(jumpStatus === true){//making the jumping happening
    
  }
}
