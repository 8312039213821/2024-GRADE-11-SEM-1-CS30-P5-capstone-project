// Geometry Run
// Natan, Sami
// Nov 27, 2024

let charSize = 100;
let charY = 1002 - charSize; // Initial ground position
let jumpStatus = false; // Is the player jumping?
let jumpSpeed = 15; // Jump velocity
let gravity = 1; // Gravity effect
let velocityY = 0; // Vertical velocity
let map = 0; // variable that will make level move

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawGame();
  runGravity();
}

function drawGame() {
  background(220);
  drawPlayer();
  
}

function drawPlayer() {
  rectMode(CORNER);
  fill(50, 200, 50);
  rect(windowWidth / 4, charY, charSize, charSize); // Main body
}

function runGravity() {
  // If jump is active, apply velocity
  if (jumpStatus === true) {
    charY += velocityY; // Update character's vertical position
    velocityY += gravity; // Apply gravity to velocity, so the jumps peak will make the player stay in the air for a second imitating real gravity

    // Check if the player lands back on the ground
    if (charY >= height - charSize) {
      charY = height - charSize; // Reset position to ground
      jumpStatus = false; // End jump
      velocityY = 0; // Reset velocity
    }
  }
}

// key press to trigger jump
function keyPressed() {
  if (key === ' ' && !jumpStatus) { // Spacebar to jump
    jumpStatus = true;
    velocityY = -jumpSpeed; 
  }
}

class block{
  constructor(x, y, w, h){
    x = this.x;
    y = this.y
    w = this.w
    h = this.h
  }

  display(){
    rect(x, y, w, h);
  }

}

