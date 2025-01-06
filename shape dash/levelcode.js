let levelBlocks = []; // main level array that will be used for
let level1 = [];
let level2 = [];
let level3 = [];

function levelbuild(){ // all the blocks for all the levels
    level1.push(new block(2000, 980, 1000, 100))

    level2.push(new block(2000, 980, 1000, 100))

    level3.push(new block(2000, 980, 1000, 100))

    //adding all the levels to the main level array
    levelBlocks.push(level1);
    levelBlocks.push(level2);
    levelBlocks.push(level3);
}

