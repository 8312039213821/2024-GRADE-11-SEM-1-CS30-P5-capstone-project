let levelBlocks = []; // main level array that will be used for
let gameLevel1 = [];
let gameLevel2 = [];
let gameLevel3 = [];
let gameLevel4 = [];
let gameLevel5 = [];

function levelbuild(){ // all the blocks for all the levels
    //level 1
    gameLevel1.push(new block(2000, 1030, 800, 50));
    gameLevel1.push(new spike(2900, 1030));
    gameLevel1.push(new block(3100, 950, 400, 50));
    gameLevel1.push(new jumppad(3600, 950));
    gameLevel1.push(new block(4000, 850, 600, 50));
    gameLevel1.push(new spike(4600, 850));
    gameLevel1.push(new block(4900, 750, 300, 50));
    gameLevel1.push(new block(5200, 750, 300, 50));
    gameLevel1.push(new spike(5500, 750));
    gameLevel1.push(new block(5800, 650, 400, 50));
    gameLevel1.push(new jumppad(6200, 650));
    gameLevel1.push(new block(6600, 550, 400, 50));
    gameLevel1.push(new spike(6900, 550));
    gameLevel1.push(new jumppad(7000, 550));
    gameLevel1.push(new block(7400, 450, 500, 50));
    gameLevel1.push(new spike(7900, 450));
    gameLevel1.push(new block(8300, 550, 400, 50));
    gameLevel1.push(new spike(8700, 550));
    gameLevel1.push(new block(9000, 650, 500, 50));
    gameLevel1.push(new jumppad(9600, 650));
    gameLevel1.push(new block(10000, 550, 600, 50));
    gameLevel1.push(new spike(10600, 550));
    gameLevel1.push(new block(10900, 650, 300, 50));
    gameLevel1.push(new block(11200, 650, 300, 50));
    gameLevel1.push(new spike(11500, 650)); 
    gameLevel1.push(new block(11800, 750, 500, 50));
    gameLevel1.push(new spike(12300, 750));
    gameLevel1.push(new block(12600, 1030, 800, 50));

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

