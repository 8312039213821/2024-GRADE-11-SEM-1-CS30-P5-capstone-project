let mapColor = (100, 100, 100);

function setup() {
  createCanvas(windowWidth, windowHeight);
  levelbuild();
}


function draw() {
  drawGame();
  runGravity();
}


function drawGame() {
  background(0, 0, 0);

  if (gameState === 0) { //menu
    if (currentMenu === "main") {
      drawMainMenu();
    } else if (currentMenu === "levels") {
      drawLevelsMenu();
    } else if (currentMenu === "settings") {
      drawSettingsMenu();
    }
  }


  if(gameState === 1){ //if alive
    mapmover += gameSpeed; //moves map
    drawPlayer();
    checkJump();

    for(let b of levelBlocks[gameLevel - 1]){ //draws each block in the array holding all the blocks for the corresponding level
      b.action()

    }
  }

  
  if(gameState === -1){ //if character dies/loses
    
  }

}


