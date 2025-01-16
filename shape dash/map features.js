let mapmover = 0, gameSpeed = 7; // variables that will make level move, map is added to x cords for things
//that need to move then map += mapspeed is used to move things those things because you keep adding that same number that gets bigger and bigger

let gameLevel = 1;
let gameState = 1; //gamestate 0 is menu, -1 is dead, 1 is level, gamelevel defines which level

  //basic block
  class block{
    constructor(x, y, w, h){
      this.xStart = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.x = x;
    }
  
    display(){
      fill(mapColor)
      rect(this.xStart - mapmover, this.y, this.w, this.h);
      this.x = this.xStart - mapmover;
    }
  
    action(){
      this.display()
    }
  }


  let jumpPadOverLap;

  //lets player jump mid air if in jump pad vicinity, based of real game jump pad
  class jumppad{
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  
    collision(){
      if(this.x - mapmover + 50 >= charX && this.x - mapmover - 50 <= charX + charSize){ //if player is overlapping with the pad
        jumpPadOverLap = true;
      }
      else{
        jumpPadOverLap = false;
      }
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