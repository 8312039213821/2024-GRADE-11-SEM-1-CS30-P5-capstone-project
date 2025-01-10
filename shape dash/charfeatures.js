let charSize = 100;
let charY = 1080 - charSize; // Initial ground position
let charX = 480;

let jumpStatus = false; // Is the player jumping?
let jumpSpeed = 19; // Jump velocity
let gravity = 1; // Gravity effect
let velocityY = 0; // Vertical velocity


//player graphics
function drawPlayer() {
    rectMode(CORNER);
    image(charcter1 ,charX, charY, charSize, charSize); // Main body
  }
  
  
  //player gravity/controls

  function runGravity() {
    // If jump is active, apply velocity or if in mid-air
    if (jumpStatus === true || charY < height - ground - charSize) {
      charY += velocityY; // Update character's vertical position
      velocityY += gravity; // Apply gravity to velocity, so the jumps peak will make the player stay in the air for a second imitating real gravity
  
  
      // Check if the player lands back on the ground
      if (charY >= height - ground - charSize) {
        charY = height - ground - charSize; // Reset position to ground
        jumpStatus = false; // End jump
        velocityY = 0; // Reset velocity
      }
    }
  } 
  
  // key press to trigger jump
  function checkJump() {
    if (keyIsPressed && key === ' ' && !jumpStatus) { // Spacebar to jump
      jumpStatus = true;
      velocityY = -jumpSpeed;
    }

  }
