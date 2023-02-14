// ENEMY IMAGES
// Unfortunately I had to make a new constant for each enemy
const skelImg1 = new Image()
skelImg1.src = './img/Skeleton.png'

const skelImg2 = new Image()
skelImg2.src = './img/Skeleton.png'

const skelImg3 = new Image()
skelImg3.src = './img/Skeleton.png'

const skelImg4 = new Image()
skelImg4.src = './img/Skeleton.png'

const skelImg5 = new Image()
skelImg5.src = './img/Skeleton.png'

const skelImg6 = new Image()
skelImg6.src = './img/Skeleton.png'

const skelImg7 = new Image()
skelImg7.src = './img/Skeleton.png'

const skelImg8 = new Image()
skelImg8.src = './img/Skeleton.png'

const skelImg9 = new Image()
skelImg9.src = './img/Skeleton.png'

const skelImg10 = new Image()
skelImg10.src = './img/Skeleton.png'

const skelImg11 = new Image()
skelImg11.src = './img/Skeleton.png'

const skelImg12 = new Image()
skelImg12.src = './img/Skeleton.png'

const skelImg13 = new Image()
skelImg13.src = './img/Skeleton.png'

const skelImg14 = new Image()
skelImg14.src = './img/Skeleton.png'

const skelImg15 = new Image()
skelImg15.src = './img/Skeleton.png'

const keeseImg1 = new Image()
keeseImg1.src = './img/Keese.png'

const keeseImg2 = new Image()
keeseImg2.src = './img/Keese.png'

const keeseImg3 = new Image()
keeseImg3.src = './img/Keese.png'

const keeseImg4 = new Image()
keeseImg4.src = './img/Keese.png'

const keeseImg5 = new Image()
keeseImg5.src = './img/Keese.png'

const keeseImg6 = new Image()
keeseImg6.src = './img/Keese.png'

const keeseImg7 = new Image()
keeseImg7.src = './img/Keese.png'

const knightLeft1 = new Image()
knightLeft1.src = './img/knightLeft.png'

const knightRight1 = new Image()
knightRight1.src = './img/knightRight.png'

const knightLeft2 = new Image()
knightLeft2.src = './img/knightLeft.png'

const knightRight2 = new Image()
knightRight2.src = './img/knightRight.png'

const knightLeft3 = new Image()
knightLeft3.src = './img/knightLeft.png'

const knightRight3 = new Image()
knightRight3.src = './img/knightRight.png'

const knightLeft4 = new Image()
knightLeft4.src = './img/knightLeft.png'

const knightRight4 = new Image()
knightRight4.src = './img/knightRight.png'

const knightLeft5 = new Image()
knightLeft5.src = './img/knightLeft.png'

const knightRight5 = new Image()
knightRight5.src = './img/knightRight.png'

const knightLeft6 = new Image()
knightLeft6.src = './img/knightLeft.png'

const knightRight6 = new Image()
knightRight6.src = './img/knightRight.png'

const knightLeft7 = new Image()
knightLeft7.src = './img/knightLeft.png'

const knightRight7 = new Image()
knightRight7.src = './img/knightRight.png'

const knightLeft8 = new Image()
knightLeft8.src = './img/knightLeft.png'

const knightRight8 = new Image()
knightRight8.src = './img/knightRight.png'

const GanonBack = new Image()
GanonBack.src = './img/GanonBack.png'

const GanonCloak = new Image()
GanonCloak.src = './img/GanonCloak.png'

const GanonHigh = new Image()
GanonHigh.src = './img/GanonHigh.png'

const GanonLow = new Image()
GanonLow.src = './img/GanonLow.png'

const GanonArm = new Image()
GanonArm.src = './img/GanonArm.png'


// ENEMIES
// Creates the enemies and their properties
const skel1 = new Enemy({
    position: {
        x: 255,
        y: 240
    },
    image: skelImg1,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 1
})

const skel2 = new Enemy({
    position: {
        x: 255,
        y: 400
    },
    image: skelImg2,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel3 = new Enemy({
    position: {
        x: 800,
        y: 650
    },
    image: skelImg3,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel4 = new Enemy({
    position: {
        x: 400,
        y: 620
    },
    image: skelImg4,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel5 = new Enemy({
    position: {
        x: 755,
        y: 650
    },
    image: skelImg5,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 1
})

const skel6 = new Enemy({
    position: {
        x: 955,
        y: 675
    },
    image: skelImg6,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel7 = new Enemy({
    position: {
        x: 955,
        y: 485
    },
    image: skelImg7,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel8 = new Enemy({
    position: {
        x: 585,
        y: 405
    },
    image: skelImg8,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel9 = new Enemy({
    position: {
        x: 1155,
        y: 675
    },
    image: skelImg9,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel10 = new Enemy({
    position: {
        x: 505,
        y: 245
    },
    image: skelImg10,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel11 = new Enemy({
    position: {
        x: 505,
        y: 385
    },
    image: skelImg11,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel12 = new Enemy({
    position: {
        x: 1050,
        y: 327
    },
    image: skelImg12,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel13 = new Enemy({
    position: {
        x: 1265,
        y: 175
    },
    image: skelImg13,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel14 = new Enemy({
    position: {
        x: 1150,
        y: 327
    },
    image: skelImg14,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const skel15 = new Enemy({
    position: {
        x: 1240,
        y: 230
    },
    image: skelImg15,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: -1.5,
    health: 1
})

const keese1 = new Enemy({
    position: {
        x: 800,
        y: 550
    },
    image: keeseImg1,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 1
})

const keese2 = new Enemy({
    position: {
        x: 1260,
        y: 340
    },
    image: keeseImg2,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 1
})

const keese3 = new Enemy({
    position: {
        x: 460,
        y: 640
    },
    image: keeseImg3,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 1
})

const keese4 = new Enemy({
    position: {
        x: 30,
        y: 540
    },
    image: keeseImg4,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 1
})

const keese5 = new Enemy({
    position: {
        x: 30,
        y: 800
    },
    image: keeseImg5,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 1
})

const keese6 = new Enemy({
    position: {
        x: 600,
        y: 540
    },
    image: keeseImg6,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 1
})

const keese7 = new Enemy({
    position: {
        x: 900,
        y: 30
    },
    image: keeseImg7,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 1
})

const knight1 = new Enemy({
    position: {
        x: 270,
        y: 320
    },
    image: knightRight1,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 5
})

const knight2 = new Enemy({
    position: {
        x: 680,
        y: 660
    },
    image: knightRight2,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 5
})

const knight3 = new Enemy({
    position: {
        x: 700,
        y: 480
    },
    image: knightRight3,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 5
})

const knight4 = new Enemy({
    position: {
        x: 490,
        y: 230
    },
    image: knightRight4,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 5
})

const knight5 = new Enemy({
    position: {
        x: 950,
        y: 327
    },
    image: knightRight5,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 5
})

const knight6 = new Enemy({
    position: {
        x: 1250,
        y: 130
    },
    image: knightRight6,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 5
})

const knight7 = new Enemy({
    position: {
        x: 840,
        y: 230
    },
    image: knightRight7,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 5
})

const knight8 = new Enemy({
    position: {
        x: 1200,
        y: 327
    },
    image: knightRight8,
    cols: 2,
    frameCount: {
        max: 2
    },
    movespeed: 1.5,
    health: 5
})

const Ganon = new Enemy({
    position: {
        x: 625,
        y: 180
    },
    image: GanonBack,
    cols: 1,
    frameCount: {
        max: 1
    },
    movespeed: 2,
    health: 60
})