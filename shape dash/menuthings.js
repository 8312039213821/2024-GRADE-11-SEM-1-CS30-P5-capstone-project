// Variables for images
let startButton, settingsButton, leftButton;
let level1, level2, level3;

// Variables for menu state
let currentMenu = "main"; // "main", "levels", "settings"

// Preload images
function preload() {
  startButton = loadImage('assets/start button .png');
  settingsButton = loadImage('assets/settings.png');
  leftButton = loadImage('assets/left button .png');
  level1 = loadImage('assets/level 1.png');
  level2 = loadImage('assets/level 2.png');
  level3 = loadImage('assets/level 3 .png');
}



// Draw Main Menu
function drawMainMenu() {
  textSize(32);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Main Menu", width / 2, 50);

  // Draw start button
  image(startButton, width / 2 - 100, 150, 200, 100);
  text("Start", width / 2, 260);

  // Draw settings button
  image(settingsButton, width / 2 - 100, 300, 200, 100);
  text("Settings", width / 2, 410);
}

// Draw Levels Menu
function drawLevelsMenu() {
  textSize(32);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Select a Level", width / 2, 50);

  // Back button
  image(leftButton, 20, 20, 50, 50);

  // Level buttons
  image(level1, width / 4 - 75, 200, 150, 150);
  image(level2, width / 2 - 75, 200, 150, 150);
  image(level3, (3 * width) / 4 - 75, 200, 150, 150);
}

// Draw Settings Menu
function drawSettingsMenu() {
  textSize(32);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Settings", width / 2, 50);

  // Back button
  image(leftButton, 20, 20, 50, 50);

  // Placeholder text for settings
  textSize(24);
  text("Audio: On/Off", width / 2, height / 2);
  text("Difficulty: Normal", width / 2, height / 2 + 50);
}

// Mouse Pressed Function for Interaction
function mousePressed() {
  // Main Menu Buttons
  if (currentMenu === "main") {
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100) {
      if (mouseY > 150 && mouseY < 250) {
        currentMenu = "levels"; // Go to Levels Menu
      } else if (mouseY > 300 && mouseY < 400) {
        currentMenu = "settings"; // Go to Settings Menu
      }
    }
  }
  // Levels Menu - Back Button
  else if (currentMenu === "levels") {
    if (mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 70) {
      currentMenu = "main"; // Back to Main Menu
    }
  }
  // Settings Menu - Back Button
  else if (currentMenu === "settings") {
    if (mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 70) {
      currentMenu = "main"; // Back to Main Menu
    }
  }
}
