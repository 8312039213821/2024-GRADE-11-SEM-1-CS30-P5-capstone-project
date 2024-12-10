let map = 0, gameSpeed = 5; // variables that will make level move, map is added to x cords for things
//that need to move then map += mapspeed is used to move things those things because you keep adding that same number that gets bigger and bigger

let gameEnding = false;

  //basic block
  class block{
    constructor(x, y, w, h){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  
    collision(){
      if(this.x - map <= charX + charSize){
        gameEnding = true;
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