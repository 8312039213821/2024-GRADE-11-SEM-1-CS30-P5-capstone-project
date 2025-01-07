let mapmover = 0, gameSpeed = 5; // variables that will make level move, map is added to x cords for things
//that need to move then map += mapspeed is used to move things those things because you keep adding that same number that gets bigger and bigger

let ground = 0; //will be used to set where the character should land wehter that be on a block or on the ground itself

let gameLevel = 1;
let gameState = 1; //gamestate 0 is menu, -1 is dead, 1 is level, gamelevel defines which level

  //basic block
  class block{
    constructor(x, y, w, h){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  
    collision(){
      if(this.x - mapmover + this.w <= charX){ //if past player
        ground = 0
      }
      else if(this.x - mapmover <= charX + charSize && charY + charSize < this.y){ //jumps on top
        ground = this.h
      }
      else if(this.x - mapmover <= charX + charSize && charY + charSize > this.y){ //collides
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



  //lets player jump mid air if in jump pad vicinity
  class jumppad{
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  
    collision(){
      
    }
  
    display(){
      fill(200, 200, 0)
      circle(this.x - mapmover, this.y, 50, 50);
    }
  
    action(){
      this.display()
      this.collision()
    }
  }