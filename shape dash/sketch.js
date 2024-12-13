let mapColor = (100, 100, 100);
let block1;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //blocks for map
  block1 = new block(2000, height - 100, 300, 100);
}


function draw() {
  drawGame();
  runGravity();
}


function drawGame() {
  background(0, 0, 0);
  if(!gameEnding){ //if character is alive
  map += gameSpeed; //moves map
  drawPlayer();
  checkJump();
  }

  block1.action();

  
  if(gameEnding){ //if character dies/loses
    
  }
}


