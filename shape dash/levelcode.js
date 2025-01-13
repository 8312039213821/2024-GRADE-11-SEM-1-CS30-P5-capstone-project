let levelBlocks = []; // main level array that will be used for
let gameLevel1 = [];
let gameLevel2 = [];
let gameLevel3 = [];
let gameLevel4 = [];
let gameLevel5 = [];

function levelbuild(){ // all the blocks for all the levels
    //level 1
    gameLevel1.push(new block(2000, 980, 1000, 100))
    //gameLevel1.push(new block(3100, 980, 1000, 100))


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

