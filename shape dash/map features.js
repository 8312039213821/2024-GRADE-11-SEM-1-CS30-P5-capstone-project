let mapmover = 0, gameSpeed = 11; // variables that will make level move, map is added to x cords for things
//that need to move then map += mapspeed is used to move things those things because you keep adding that same number that gets bigger and bigger

let ground = 0;

let gameLevel = 1;
let gameState = 0; //gamestate 0 is menu, -1 is dead, 1 is level, gamelevel defines which level

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
    constructor(xStart, y){
      this.xStart = xStart;
      this.y = y;
    }
  
    collision(){
      this.x = this.xStart - mapmover;
      if(this.x + 25 >= charX && this.x - 25 <= charX + charSize && charY < this.y + 25 && charY + charSize > this.y - 25){ //if player is overlapping with the pad
        jumpPadOverLap = true;
      }
    }
  
    display(){
      this.x = this.xStart - mapmover;
      fill(200, 200, 0)
      circle(this.x, this.y, 50);
    }
  
    action(){
      this.display()
      this.collision()
    }
  }



  class spike{                                                                                                                                            
    constructor(xStart, y){
      this.xStart = xStart;
      this.y = y;
      this.s = 80;
    }
  
    display(){
      fill(mapColor);
      this.x = this.xStart - mapmover;
      triangle(this.x, this.y, this.x + this.s/2, this.y - this.s, this.x + this.s, this.y);
    }

    collision(){
      this.x = this.xStart - mapmover;

      if(this.x + this.s * 0.75 > charX && this.x < charX + charSize && charY + charSize > this.y - this.s * .4){ //if player is overlapping with the spikes wider hitbox
        gameState = -1; //death
      }

      if(this.x + this.s * 0.6 > charX && this.x + this.s * 0.3 < charX + charSize && charY + charSize > this.y - this.s){ //if player is overlapping with the spikes taller hitbox
        gameState = -1; //death
      }

    }
  
    action(){
      this.display();
      this.collision();
    }
  }