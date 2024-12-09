// Geometry Run
// Natan, Sami
// Nov 27, 2024


let charSize = 100;
let charY = 1002 - charSize; // Initial ground position
let charX = 480;


let jumpStatus = false; // Is the player jumping?
let jumpSpeed = 16; // Jump velocity
let gravity = 1; // Gravity effect
let velocityY = 0; // Vertical velocity


let map = 0, gameSpeed = 5; // variables that will make level move, map is added to x cords for things
//that need to move then map += mapspeed is used to move things those things because you keep adding that same number that gets bigger and bigger
let mapColor = (100, 100, 100);
let block1;




function setup() {
  createCanvas(windowWidth, windowHeight);


  //blocks for map
  block1 = new block(2000, 900, 300, 100);
}


function draw() {
  drawGame();
  runGravity();
}


function drawGame() {
  background(0, 0, 0);
  map += gameSpeed; //moves map
  drawPlayer();
  checkJump();


  block1.action();
 
}


function drawPlayer() {
  rectMode(CORNER);
  fill(50, 200, 50);
  rect(charX, charY, charSize, charSize); // Main body
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
function checkJump() {
  if (keyIsPressed && key === ' ' && !jumpStatus) { // Spacebar to jump
    jumpStatus = true;
    velocityY = -jumpSpeed;
  }
}


class block{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }


  collision(){
    if(this.x - map <= charX + charSize){
      3 < 7;
    }
  }


  display(){
    fill(mapColor)
    rect(this.x - map, this.y, this.w, this.h);
  }


  action(){
    this.display()
    this.collision()
  }


}


