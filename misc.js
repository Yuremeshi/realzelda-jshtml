// Miscellaneous Sprites for the healthbar, chest, Triforce etc.
const healthBar = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: health4,
    cols: 1
})


const chest = new Sprite({
    position: {
        x: -100,
        y: -100
    },
    image: chestOpen,
    cols: 1
})


const tri1 = new Sprite({
    position:{
        x: -120,
        y: -130
    },
    image: triOne,
    cols: 1
})


const tri2 = new Sprite({
    position:{
        x: -120,
        y: -130
    },
    image: triTwo,
    cols: 1
})

const tri3 = new Sprite({
    position:{
        x: -120,
        y: -130
    },
    image: triThr,
    cols: 1
})

const portals = new Portal({
    position:{
        x: 1138,
        y: 40
    },
    image: portalImg,
    cols: 8,
    frameCount: {
        max: 8
    }
})

const dekuShrub = new Sprite({
    position: {
        x: 630,
        y: 410
    },
    image: dekuImage,
    cols: 1
})