// Variables for images
let startButton, level1Background, leftButton;
let level1, level2, level3; 
let charcter1;
let gameGround; 

// Variables for menu state
let currentMenu = 0; // 0 is main menu 1 is settings 2.1, 2.2, and 2.3 are levels

// Preload images
function preload() {
  startButton = loadImage('assets/start button .png');
  level1Background = loadImage('assets/background.png');
  settingsButton = loadImage('assets/settings.png');
  leftButton = loadImage('assets/left button .png');
  level1 = loadImage('assets/level 1.png');
  level2 = loadImage('assets/level 2.png');
  level3 = loadImage('assets/level 3 .png');
  charcter1 = loadImage('assets/charcter 1.png');
  gameGround = loadImage('assets/gameGround.png');
  menuscreen = loadImage('assets/menuscreen.png');
  level1screen = loadImage('assets/level1screen.png');
  level2screen = loadImage('assets/level2screen.png');
  level3screen = loadImage('assets/level3screen.png');
}



// Draw Main Menu
function drawMenus() {
  if(currentMenu === 0){
  image(menuscreen, 0, 0, width, height)
  }
  if(currentMenu === 1){
    image(level1screen, 0, 0, width, height)
  }
  else if(currentMenu === 1.1){
    image(level2screen, 0, 0, width, height)
  }
  else if(currentMenu === 1.2){
    image(level3screen, 0, 0, width, height)
  }

  if(currentMenu < 1 && currentMenu > 0){
    currentMenu = 1.2;
  }
}

// Mouse Pressed Function for Interaction
function mousePressed() {
  // Main Menu Buttons
  if (currentMenu === 0) {
    if(mouseX > 800 && mouseX < 1125 && mouseY > 340 && mouseY < 670){
      currentMenu = 1;
    }
  }
  // Levels Menu 
  else if (currentMenu === 1) { // first level select screen
    if (mouseX > 27 && mouseX < 127 && mouseY > 20 && mouseY < 127) { // back to main menu
      currentMenu = 0; 
    }
    else if (mouseX > 1788 && mouseX < 1875 && mouseY > 427 && mouseY < 635) { // next level
      currentMenu = 1.1; 
    }
    else if (mouseX > 33 && mouseX < 132 && mouseY > 427 && mouseY < 635) { // previous level
      currentMenu = 1.2; 
    }
    else if (mouseX > 380 && mouseX < 1534 && mouseY > 177 && mouseY < 495) { // select this level
      gameLevel = 1;
      gameState = 1;
    }
  }

  else if (currentMenu === 1.1) { // second level select screen
    if (mouseX > 27 && mouseX < 127 && mouseY > 20 && mouseY < 127) { // back to main menu
      currentMenu = 0; 
    }
    else if (mouseX > 1788 && mouseX < 1875 && mouseY > 427 && mouseY < 635) { // next level
      currentMenu = 1.2; 
    }
    else if (mouseX > 33 && mouseX < 132 && mouseY > 427 && mouseY < 635) { // previous level
      currentMenu = 1; 
    }
    else if (mouseX > 380 && mouseX < 1534 && mouseY > 177 && mouseY < 495) { // select this level
      gameLevel = 2;
      currentMenu = 0; 
    }
  }

  else if (currentMenu === 1.2) { // third level select screen
    if (mouseX > 27 && mouseX < 127 && mouseY > 20 && mouseY < 127) { // back to main menu
      currentMenu = 0; 
    }
    else if (mouseX > 1788 && mouseX < 1875 && mouseY > 427 && mouseY < 635) { // next level
      currentMenu = 1; 
    }
    else if (mouseX > 33 && mouseX < 132 && mouseY > 427 && mouseY < 635) { // previous level
      currentMenu = 1.1; 
    }
    else if (mouseX > 380 && mouseX < 1534 && mouseY > 177 && mouseY < 495) { // select this level
      gameLevel = 3;
      currentMenu = 0; 
    }
  }
}
