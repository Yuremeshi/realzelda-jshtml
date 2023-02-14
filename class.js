// BOUNDARIES
class Boundaries {
    constructor({ position }) {
        this.position = position
        this.width = 16
        this.height = 16
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}


// SPRITE
// Create class Sprite with various properties
class Sprite {
    constructor({ position, image, frameCount, cols, movespeed }) {
        // Position includes the objects' x and y positions on the canvas.  The x and y points to the top left pixel of the sprite on the canvas
        this.position = position
        // Is the image of the sprite that gets drawn on the canvas
        this.image = image
        /* 
        Refers to the number of columns in the sprite.
        Most of the Zelda sprite images consist of 4 Zeldas
        with different poses side by side in a row.
        The image gets cropped in the draw function below 
        by dividing the width of the image with the number of columns.
        */
        this.cols = cols
        this.movespeed = movespeed
        /* 
        Determines which crop of the zelda image to show.
        For the Zelda sprite the framcount ranges from 0 to 4.
        */
        this.frameCount = { ...frameCount, val: 0, elapsed: 0 }

        // Determines the width and the height of this sprite by using the width and height of the image loaded.
        this.image.onload = () => {
            this.width = this.image.width / cols
            this.height = this.image.height
        }
        this.walking = false
    }

    beamCheck() {
        this.angle = Math.atan2(mouseY - this.position.y, mouseX - this.position.x)
    }

    /* 
    Create draw function for zelda sprite.  Crops the image to show only the first pose rather than all four poses in the png file
    The pose drawn on the screen is determined by the starting point of the crop
    The starting point of the crop is determined by this.frameCount.val * this.width
    EX: If the width of the entire image is 8 and there are 4 columns the this.width will be equal to 2
    If this.frameCount.val is equal to two the crop will start at 4 and end at 6
    The image shown will be whatever is between the x values of 4 and 6
    Thanks to Chris Courses and various other youtube videos for this method
    */
    draw() {
        c.drawImage(
            // The image drawn
            this.image,
            // Starting point x of the crop
            this.frameCount.val * this.width,
            // Starting point y of the crop
            0,
            // Amount of x pixels to crop
            this.image.width / this.cols,
            // Amount of y pixels to crop
            this.image.height,
            // X position to draw image
            this.position.x, 
            // Y position to draw image
            this.position.y,
            // Width of the image drawn
            this.image.width / this.cols,
            // Height of the image drawn
            this.image.height
        )

        // Increases this.frameCount.val if walking with a built-in delay
        if (this.walking == true) {
            if (this.frameCount.max > 1) {
                this.frameCount.elapsed++
            }

            if (this.frameCount.elapsed % 8 == 0){

                if (this.frameCount.val < this.frameCount.max - 1) { 
                    this.frameCount.val++
                }
                else {
                    this.frameCount.val = 0
                }
            }
        }
    }
}


// ENEMY
class Enemy {
    constructor({ position, image, frameCount, cols, movespeed, health }) {
        this.position = position
        this.image = image
        this.cols = cols
        this.movespeed = movespeed
        this.health = health
        this.frameCount = { ...frameCount, val:0, elapsed: 0 }

        this.image.onload = () => {
            this.width = this.image.width / cols
            this.height = this.image.height
        }
        // Determines the direction the Enemy sprite is moving in
        this.xdirection = true
        this.ydirection = true
    }

    draw() {
        c.drawImage(
            this.image,
            this.frameCount.val * this.width,
            0,
            this.image.width / this.cols,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.cols,
            this.image.height
        )

        if (this.frameCount.max > 1) {
            this.frameCount.elapsed++
        }

        if (this.frameCount.elapsed % 16 == 0){

            if (this.frameCount.val < this.frameCount.max - 1) { 
                this.frameCount.val++
            }
            else {
                this.frameCount.val = 0
            }
        }
    }
}


// DIALOGUE CLASS
class Dialogues {
    constructor({ position, image}) {
        this.position = position
        this.image = image

        this.image.onload = () => {
            this.width = this.image.width
            this.height = this.image.height
        }
    }

    draw() {
        cd.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.image.width,
            this.image.height
        )
    }
}


// PORTAL
class Portal {
    constructor({ position, image, frameCount, cols }) {
        this.position = position
        this.image = image
        this.cols = cols
        this.frameCount = { ...frameCount, val: 0, elapsed: 0 }

        this.image.onload = () => {
            this.width = this.image.width / cols
            this.height = this.image.height
        }
    }

    draw() {
        c.drawImage(
            this.image,
            this.frameCount.val * this.width,
            0,
            this.image.width / this.cols,
            this.image.height,
            this.position.x, 
            this.position.y,
            this.image.width / this.cols,
            this.image.height
        )

        if (this.frameCount.max > 1) {
            this.frameCount.elapsed++
        }

        if (this.frameCount.elapsed % 8 == 0){

            if (this.frameCount.val < this.frameCount.max - 1) { 
                this.frameCount.val++
            }
            else {
                this.frameCount.val = 0
            }
        }
    }
}


// TRIBEAM SHOOT CLASS
// Credit to a variety of different Stackoverflow pages and youtube videos for help with figuring this out
class triBeam {
    constructor(position, dx, dy, damage, size) {
        this.size = size
        this.width = size
        this.height = size
        // Clones the current position of Zelda to determine its starting point
        this.position = structuredClone(position)
        // Puts the starting position to the center of the Zelda sprite
        this.position.x = position.x + zelda.width / 2
        this.position.y = position.y + zelda.height / 2
        // X position of mouse
        this.dx = dx
        // Y position of mouse
        this.dy = dy
        this.speed = 6
        this.damage = damage
        /* 
        Figures out the vector between Zelda and the mouse when the mouse is clicked
        Then calculates the delta by getting the length of the vector
        Then multiply by the speed to determine how much to change the x position and y position by
        */
        var dirx = (this.dx - this.position.x)
        var diry = (this.dy - this.position.y)
        var pyth = Math.hypot(dirx, diry)
        this.speedx = (dirx / pyth) * this.speed
        this.speedy = (diry / pyth) * this.speed     
    }

    // Updates the position of the triBeam
    toMouse() {
        this.position.x += this.speedx
        this.position.y += this.speedy
    }

    // Draws a circle filled with the color yellow
    draw() {
        c.fillStyle = "yellow",
        c.strokeStyle = "white",
        c.beginPath(),
        c.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI),
        c.fill(),
        c.stroke()
    }
}


// These are functions but I put them here with the triBeam shoot class because it made it easier to code
// MOUSE EVENT LISTENERS
// Listens for the mousedown event and then pushes a new triBeam into triBeamlist
window.addEventListener('mousedown', (event) => {
    if (triBeamtimer == 0 && level == 2 && dialogueNumber2 == 0) {
        if (mouseX != zelda.position.x || mouseY != zelda.position.y && level > 0) {
            triBeamlist.push(new triBeam(zelda.position, mouseX, mouseY, 1, 2))
            triBeamtimer = 1
        }
    }
    if (triBeamtimer == 0 && level == 3 && dialogueNumber3 == 0) {
        if (mouseX != zelda.position.x || mouseY != zelda.position.y && level > 0) {
            triBeamlist.push(new triBeam(zelda.position, mouseX, mouseY, 1, 4))
            triBeamtimer = 1
        }
    }
    if (triBeamtimer == 0 && level == 4 && dialogueNumber4 == 0) {
        if (mouseX != zelda.position.x || mouseY != zelda.position.y && level > 0) {
            triBeamlist.push(new triBeam(zelda.position, mouseX, mouseY, 3, 7))
            triBeamtimer = 1
        }
    }
    if (triBeamtimer == 0 && level == 5 && dialogueNumber5 == 0 && dialogueNumber6 == 0) {
        if (mouseX != zelda.position.x || mouseY != zelda.position.y && level > 0) {
            triBeamlist.push(new triBeam(zelda.position, mouseX, mouseY, 3, 7))
            triBeamtimer = 1
        }
    }
})

// triBeams for the finale
function finaleBeam() {
    if (dialogueNumber6 == 3 || dialogueNumber6 == 4) {
        setTimeout(() => {
            triBeamlist.push(new triBeam(tri3.position, Ganon.position.x + Ganon.width / 2, Ganon.position.y + Ganon.height / 2, 0, 15))
            finaleBeam()
        }, 1000)
    }
}

// Adds a delay between each triBeam shot
function triBeamtimefunc() {
    if (triBeamtimer > 0 && triBeamtimer < 25) triBeamtimer += 1
    else if (triBeamtimer > 24) triBeamtimer = 0
}

/* 
Updates the current position of the mouse each time the mouse moves
This is offset by the margin between the canvas and the edge of the window
event.clientX/Y determines the position of the mouse relative to the window rather than canvas
So the offset is necessary
I initially had the game be in the center of the screen 
But I couldn't get the margin between the canvas and the window to use as a value to determine the offset amount
*/
window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX - 10
    mouseY = event.clientY - 7
})


// TRIBEAM COLLISION FUNCTIONS
/*
If the triBeam collides with the enemy it reduces the health of the enemy by 1
The triBeam is spliced out of the triBeamlist array based on its triBeamindex number
If the enemy health reaches or is less than 0 it splices the enemy out of the enemyList array
*/
function collisionBeam(triBeam, enemy, index, triBeamindex, enemyList) {
    if (anycollision({
        object1: triBeam,
        object2: enemy
    })
    ) {
        enemy.health -= triBeam.damage
        triBeamlist.splice(triBeamindex, 1)
        if (enemy.health <= 0) enemyList.splice(index, 1)
    }

    if (triBeam.position.x < -10 || 
        triBeam.position.x > 1370 || 
        triBeam.position.y < -10 || 
        triBeam.position.y > 860) {
            triBeamlist.splice(triBeamindex, 1)
        }
}

// Collision with Ganon.  Rather than splicing Ganon it activates the final dialogue sequence
function collisionBeamganon(triBeam, enemy, triBeamindex) {
    if (anycollision({
        object1: triBeam,
        object2: enemy
    })
    ) {
        enemy.health -= triBeam.damage
        triBeamlist.splice(triBeamindex, 1)
        if (enemy.health <= 0) dialogueNumber6 = 1
    }

    if (triBeam.position.x < -10 || 
        triBeam.position.x > 1370 || 
        triBeam.position.y < -10 || 
        triBeam.position.y > 860) {
            triBeamlist.splice(triBeamindex, 1)
        }
}

// Collision during finale
function collisionBeamfinale(triBeam, enemy, triBeamindex) {
    if (anycollision({
        object1: triBeam,
        object2: enemy
    })
    ) {
        triBeamlist.splice(triBeamindex, 1)
    }

    if (triBeam.position.x < -10 || 
        triBeam.position.x > 1370 || 
        triBeam.position.y < -10 || 
        triBeam.position.y > 860) {
            triBeamlist.splice(triBeamindex, 1)
        }
}

// Collision with boundaries
function collisionBeambound(triBeam, boundaries, triBeamindex) {
    for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i]
        if (
            anycollision({
                object1: triBeam,
                object2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y
                }}
            })
        ) triBeamlist.splice(triBeamindex, 1)
    }
}


// GANON BEAM CLASS
/*
ganonBeam class with the starting position being Ganon's raised hand
The direction it shoots at is Zelda's current position
Otherwise uses the same math and logic as the triBeam
*/
class ganonBeam {
    constructor(position) {
        this.size = 15
        this.width = this.size
        this.height = this.size
        this.position = structuredClone(position)
        this.position.x = position.x + Ganon.width
        this.position.y = position.y
        this.dx = zelda.position.x + zelda.width / 2
        this.dy = zelda.position.y + zelda.height / 2
        this.speed = 4
        var dirx = (this.dx - this.position.x)
        var diry = (this.dy - this.position.y)
        var pyth = Math.hypot(dirx, diry)
        this.speedx = (dirx / pyth) * this.speed
        this.speedy = (diry / pyth) * this.speed
    }

    toZelda() {
        this.position.x += this.speedx
        this.position.y += this.speedy
    }

    draw() {
        c.fillStyle = "red",
        c.strokeStyle = "black",
        c.beginPath(),
        c.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI),
        c.fill(),
        c.stroke()
    }
}

// Randomized timer for ganonBeam so that ganonBeam shoots at random intervals
function ganonShoot() {
    if (dialogueNumber5 == 0 && dialogueNumber6 == 0) {
        var min = 1
        var max = 3
        var rand = Math.floor(Math.random() * (max - min) + min)
        setTimeout(() => {
            ganonBeamlist.push(new ganonBeam(Ganon.position))
            ganonShoot()
        }, rand * 1000)
    }
}

// Collision between ganonBeam and Zelda
function zeldaGanonbeam(ganonBeam, object, ganonBeamindex) {
    if (
        anycollision({
            object1: ganonBeam,
            object2: object
        })
    ) {
        ganonBeamlist.splice(ganonBeamindex, 1)
    }

    if (ganonBeam.position.x < -20 ||
        ganonBeam.position.x > 1380 ||
        ganonBeam.position.y < -20 ||
        ganonBeam.position.y > 870) {
            ganonBeamlist.splice(ganonBeamindex, 1)
        }
}

