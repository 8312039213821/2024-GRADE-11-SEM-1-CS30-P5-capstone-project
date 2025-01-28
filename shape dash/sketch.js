// DISCLAIMAR, only the play button and the level one buttons actually do anything. Everything else is for either show or an unfinished peice of content
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

let mapColor = (100, 100, 100);

function setup() {
  createCanvas(windowWidth, windowHeight);
  levelbuild();
  noStroke();
}


function draw() {
  drawGame();
  if(gameState === 1){
  runGravity();
  }
  print(mapmover);
}


function drawGame() {
  background(0, 0, 0);

  if(gameState === 0) { //menu
    drawMenus();
  }
  

  else if(gameState === 1){ //if alive
    if(gameLevel === 1){
      image(level1Background, 0, 0, 1920, 1080)
      if(mapmover > 20200){
        gameState = 10;
      }
    }
    mapmover += gameSpeed; //moves map
    jumpPadOverLap = false;
    drawPlayer();
    for(let b of levelBlocks[gameLevel - 1]){ //draws each block in the array holding all the blocks for the corresponding level
      b.action()
    }
    checkJump();

    
  }

  else if(gameState === 10){
    background(0, 0, 0);
    fill(255);
    textAlign(CENTER);
    textSize(200);
    text("Victory!", width/2, height/2)
    if(keyIsDown(32) === true){
    gameState = -1;
    }
  }

  
  else if(gameState === -1){ //if character dies/loses
    mapmover = 0;
    gameState = 0;
  }

}


