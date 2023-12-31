namespace SpriteKind {
    export const Weapon = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Weapon, function (sprite, otherSprite) {
    game.gameOver(true)
})
tiles.setCurrentTilemap(tilemap`level1`)
let Guy = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Guy)
tiles.placeOnTile(Guy, tiles.getTileLocation(0, 3))
scene.cameraFollowSprite(Guy)
let Enemy_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Enemy)
Enemy_1.follow(Guy, 90)
tiles.placeOnTile(Enemy_1, tiles.getTileLocation(10, 9))
let Dagger = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 1 1 1 . 
    . . . . . . . . . . . 1 1 d 1 . 
    . . . . . . . . . . 1 1 d 1 1 . 
    . . . . . . . . . 1 1 d 1 1 . . 
    . . . . . . . . 1 1 d 1 1 . . . 
    . . . . . . . 1 1 d 1 1 . . . . 
    . . . . . . 1 1 d 1 1 . . . . . 
    . . . . . 1 1 d 1 1 . . . . . . 
    . . . . 1 1 d 1 1 . . . . . . . 
    . . . 1 1 d 1 1 . . . . . . . . 
    . . . e d 1 1 . . . . . . . . . 
    . . e e e 1 . . . . . . . . . . 
    . e e e . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    `, SpriteKind.Weapon)
tiles.placeOnTile(Dagger, tiles.getTileLocation(3, 13))
