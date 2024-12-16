let mapmover = 0, gameSpeed = 5; // variables that will make level move, map is added to x cords for things
//that need to move then map += mapspeed is used to move things those things because you keep adding that same number that gets bigger and bigger

let ground = 0; //will be used to set where the character should land wehter that be on a block or on the ground itself

let gameState = 1; //gamestate 0 is menu, -1 is dead, 1 2 3... are levels

  //basic block
  class block{
    constructor(x, y, w, h){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  
    collision(){
      if(this.x - mapmover + this.w <= charX){
        ground = 0
      }
      else if(this.x - mapmover <= charX + charSize && charY + charSize < this.y){
        ground = this.h
      }
      else if(this.x - mapmover <= charX + charSize && charY + charSize > this.y){
        gameState = -1; //death
      }
    }
  
    display(){
      fill(mapColor)
      rect(this.x - mapmover, this.y, this.w, this.h);
    }
  
    action(){
      this.display()
      this.collision()
    }
  }