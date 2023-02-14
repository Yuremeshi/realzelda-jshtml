// ZELDA
// Images for the Zelda sprite
const zeldaDown = new Image()
zeldaDown.src = './img/Zelda Down.png'

const zeldaUp = new Image()
zeldaUp.src = './img/Zelda Up.png'

const zeldaRight = new Image()
zeldaRight.src = './img/Zelda Right.png'

const zeldaLeft = new Image()
zeldaLeft.src = './img/Zelda Left.png'

const zeldaTri = new Image()
zeldaTri.src = './img/Zelda Tri.png'

const zelda = new Sprite({
    position: {
        x: 255,
        y: 80
    },
    image: zeldaDown,
    cols: 4,
    frameCount: {
        max: 4
    },
    movespeed: 2
})


// WALK FUNCTION
function walk(deltaX, deltaY, image) {
    zelda.position.x += deltaX
    zelda.position.y += deltaY
    zelda.image = image
}