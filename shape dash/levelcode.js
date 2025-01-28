let levelBlocks = []; // main level array that will be used for
let gameLevel1 = [];
let gameLevel2 = [];
let gameLevel3 = [];
let gameLevel4 = [];
let gameLevel5 = [];

function levelbuild(){ // all the blocks for all the levels
    //level 1
    gameLevel1.push(new spike(1900, 1080));
    gameLevel1.push(new spike(2900, 1080));
    gameLevel1.push(new block(3100, 1080, 400, 50));
    gameLevel1.push(new jumppad(3800, 930));
    gameLevel1.push(new block(4000, 850, 600, 230));
    gameLevel1.push(new block(4700, 750, 300, 50));
    gameLevel1.push(new block(5200, 650, 800, 430));
    gameLevel1.push(new block(6200, 800, 800, 430));
    gameLevel1.push(new block(7200, 950, 500, 430));
    gameLevel1.push(new spike(8200, 1080));
    gameLevel1.push(new spike(8800, 1080));
    gameLevel1.push(new spike(8880, 1080));
    gameLevel1.push(new spike(8960, 1080));
    gameLevel1.push(new jumppad(8880, 930));
    gameLevel1.push(new spike(10000, 1080));
    gameLevel1.push(new block(10600, 1000, 100, 430));
    gameLevel1.push(new block(10850, 900, 100, 430));
    gameLevel1.push(new block(11100, 800, 100, 430));
    gameLevel1.push(new block(11350, 800, 1900, 430));
    gameLevel1.push(new spike(11800, 800));
    gameLevel1.push(new spike(12400, 800));
    gameLevel1.push(new spike(13000, 800));
    gameLevel1.push(new block(13450, 900, 100, 430));
    gameLevel1.push(new block(13600, 1000, 100, 430));
    gameLevel1.push(new block(14700, 950, 100, 430));
    gameLevel1.push(new jumppad(15100, 750));
    gameLevel1.push(new block(15400, 750, 100, 430));
    gameLevel1.push(new jumppad(15800, 800));
    gameLevel1.push(new jumppad(16100, 800));
    gameLevel1.push(new block(16400, 750, 1200, 430));
    gameLevel1.push(new spike(16800, 750));
    gameLevel1.push(new spike(18500, 1080));
    gameLevel1.push(new spike(18700, 1080));
    gameLevel1.push(new spike(18900, 1080));
    gameLevel1.push(new spike(19100, 1080));
    gameLevel1.push(new jumppad(19600, 880));
    gameLevel1.push(new jumppad(19800, 680));
    gameLevel1.push(new block(20000, 550, 5000, 530));


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

