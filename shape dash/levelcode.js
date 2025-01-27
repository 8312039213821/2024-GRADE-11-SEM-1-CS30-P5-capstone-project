let levelBlocks = []; // main level array that will be used for
let gameLevel1 = [];
let gameLevel2 = [];
let gameLevel3 = [];
let gameLevel4 = [];
let gameLevel5 = [];

function levelbuild(){ // all the blocks for all the levels
    //level 1
    gameLevel1.push(new block(2000, 1030, 800, 50));
    gameLevel1.push(new spike(2900, 1080));
    gameLevel1.push(new block(3100, 1080, 400, 50));
    gameLevel1.push(new jumppad(3800, 930));
    gameLevel1.push(new block(4000, 850, 600, 230));
    gameLevel1.push(new block(4700, 750, 300, 50));
    gameLevel1.push(new block(5200, 650, 800, 430));


    //-----------------------------------------------------------------------------------------------------------------------
    //level 2
    gameLevel2.push(new block(2000, 980, 1000, 100))


    //-----------------------------------------------------------------------------------------------------------------------
    //adding all the levels to the main level array
    levelBlocks.push(gameLevel1);
    levelBlocks.push(gameLevel2);
    levelBlocks.push(gameLevel3);
    levelBlocks.push(gameLevel4);
    levelBlocks.push(gameLevel5);
}

