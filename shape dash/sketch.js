let mapColor = (100, 100, 100);
let block1;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //blocks for map
  
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

    if(gameLevel === 1){ // level 1
      runL1();
    }

    if(gameLevel === 2){ // level 2
      runL2();
    }

    if(gameLevel === 3){ // level 3
      runL3();
    }
  }

  
  if(gameState === -1){ //if character dies/loses
    
  }

}


