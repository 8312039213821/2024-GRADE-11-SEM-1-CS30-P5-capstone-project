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

  if (gameState === 0) {
    
  }

  if(gameState === 1){ //level 1
  mapmover += gameSpeed; //moves map
  drawPlayer();
  checkJump();

  block1.action();
  }

  
  if(gameState === -1){ //if character dies/loses
    
  }

}


