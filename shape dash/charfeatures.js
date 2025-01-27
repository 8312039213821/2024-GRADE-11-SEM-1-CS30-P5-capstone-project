let charSize = 80;
let charY = 1080 - charSize; // Initial ground position
let charX = 480;

let jumpStatus = false; // Is the player jumping?
let jumpSpeed = 18; // Jump velocity
let gravity = 1; // Gravity effect
let velocityY = 0; // Vertical velocity


//player graphics
function drawPlayer() {
    rectMode(CORNER);
    image(charcter1 ,charX, charY, charSize, charSize); // Main body
  }
  
  
  //player gravity/controls

  function runGravity() {
    // If jump is active or if in mid-air, apply velocity/gravity
    //if (jumpStatus === true || charY < height - ground - charSize) {
      charY += velocityY; // Update character's vertical position
      velocityY += gravity; // Apply gravity to velocity, so the jumps peak will make the player stay in the air for a second imitating real gravity
  
  
      // Check if the player lands back on the ground
      if (charY >= height - ground - charSize) {
        charY = height - ground - charSize; // Reset position to ground
        jumpStatus = false; // End jump
        velocityY = 0; // Reset velocity
      }

      for (let i = 0; i < levelBlocks[gameLevel - 1].length; i++) {
          let b = levelBlocks[gameLevel - 1][i]
          if(charX + charSize >= b.x && charX < b.x + b.w){
            if(charY + charSize > b.y && charY + charSize < b.y + b.h * .4){ // if on top of a block
              charY = b.y - charSize; // keep character on top of block and dont let it fall through
              jumpStatus = false; // End jump
              velocityY = 0; // Reset velocity
            }
            else if(charY + charSize > b.y && charY < b.y + b.h){
              gameState = -1;
            }
          }
      }
    }
  //} 
  
  // key press to trigger jump
  function checkJump() {
    if (keyIsPressed && key === ' ' && !jumpStatus && velocityY === 0) { // Spacebar to jump
      jumpStatus = true;
      velocityY = -jumpSpeed;
    }

    if (keyIsPressed && key === ' ' && jumpPadOverLap === true) { // Spacebar to jump
      print("double jump")
      jumpStatus = true;
      velocityY = -jumpSpeed;
    }

  }
