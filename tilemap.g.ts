// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003090909090909090909090909090902080b0b0b0b0b0b0e0e0e0f0f0f0f0f060a0b0c010b0c010e0c07070707010f060b0b06080b06080e06030909090a0f06070705080b06080b06080f0f0f0f0f060309090a0b06080b0604070c07070705080b0b0b0b06080b0603090d09090902080b0c070705080b06080f0f0f0f0f06080b0d0909090a0b06080f0c07011206080b0b0b0b0b0b0b06080f061108120604070707070707070504070510081206030909090909090909090909090a130608131313131313131313131313131306081313131313131313131313131313060813131313131313131313131313130604070707070707070707070707070705`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . 2 2 . 2 2 2 2 2 2 . 2 
. . 2 2 . 2 2 . 2 2 2 2 2 2 . 2 
2 2 2 2 . 2 2 . 2 2 . . . . . 2 
2 2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 
2 . . . . 2 2 . 2 2 . 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 2 . . . . . 2 
2 . 2 2 2 2 2 . 2 2 . 2 2 2 . 2 
2 . . . . . . . 2 2 . 2 . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.floorLight0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.floorMixed,sprites.dungeon.floorDark0,sprites.dungeon.floorLight3,sprites.dungeon.floorLight1,sprites.dungeon.stairSouth,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
