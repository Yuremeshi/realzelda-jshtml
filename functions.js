// FADE FUNCTIONS FOR SECOND CANVAS
/* 
Fades the second canvas by reducing its globalAlpha to zero
This creates the effect of fading in from black or white or whatever color is input
*/
function alphaFade(color) {
    i -= 0.005
    i = i < 0 ? 0 : i
    cf.clearRect(0, 0, canvasFade.width, canvasFade.height)
    cf.globalAlpha = i
    cf.fillStyle = color
    cf.fillRect(0, 0, canvasFade.width, canvasFade.height)
}

/* 
Increases globalAlpha to 1 creating a fade to color effect
This unfades canvasFade
Yes the naming sense is confusing, and I still get confused by it
I should have swapped the names but I'm too lazy to swap them now
*/
function alphaUnfade(color) {
    i += 0.005
    i = i < 1 ? i : 1
    cf.clearRect(0, 0, canvasFade.width, canvasFade.height)
    cf.globalAlpha = i
    cf.fillStyle = color
    cf.fillRect(0, 0, canvasFade.width, canvasFade.height)
}

// FADE FUNCTIONS FOR DIALOGUE CANVAS
function alphaFadecd() {
    j -= 0.005
    j = j < 0 ? 0 : j
    cd.clearRect(0, 0, canvasDial.width, canvasDial.height)
    cd.globalAlpha = j
}

function alphaUnfadecd() {
    j += 0.005
    j = j < 1 ? j : 1
    cd.clearRect(0, 0, canvasDial.width, canvasDial.height)
    cd.globalAlpha = j
}



// KEY PRESS EVENT LISTENERS
let lastkey = ''
// Event listener for when key is pressed down
window.addEventListener('keydown', (event) => {
    keys[event.key] = true
})

// Event listener for when key is released
window.addEventListener('keyup', (event) => {
    keys[event.key] = false
})


// COLLISION FUNCTION
// Credit to Chris Courses for this collision function
function anycollision({ object1, object2 }) {
    return (
        object1.position.x + object1.width >= object2.position.x && // Right side of object1 touches left side of object2
        object1.position.x <= object2.position.x + object2.width && // Left side of object1 touches right side of object2
        object1.position.y + object1.height >= object2.position.y && // Bottom side of object1 touches top side of object2
        object1.position.y <= object2.position.y + object2.height // Top side of object touches bottom side of object2
    )
}


// MOVEMENT FUNCTIONS
/*
Movement function uses a boolean value, a nested for loop, and a nested boolean to determine movement
First boolean checks for which key of WASD has been pressed
The for loop runs through every value in the boundaries arrays
The second boolean checks for a collision between Zelda and the current boundary
EX: If W is pressed and Zelda is not touching any boundary then walking will equal true
And Zelda will move -movespeed on the y axis
I've copy pasted this function multiple times because the boundaries of each level are slightly different
An optimization I could make is using variables so that the function could work differently depending on the level,
But I've decided to leave it as is in this case heh
Credit to Chris Courses for the basis of this movement method
*/
function movement1() {
    let walking = true

    if (keys.w == true || keys.W == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y + zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries5.length; i++) {
            const boundary2 = boundaries5[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary2, position: {
                        x: boundary2.position.x,
                        y: boundary2.position.y + zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(0, -zelda.movespeed, zeldaUp)
    }

    if (keys.s == true || keys.S == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y - zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries5.length; i++) {
            const boundary2 = boundaries5[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary2, position: {
                        x: boundary2.position.x,
                        y: boundary2.position.y - zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(0, zelda.movespeed, zeldaDown)
    }

    if (keys.d == true || keys.D == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x - zelda.movespeed,
                        y: boundary.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries5.length; i++) {
            const boundary2 = boundaries5[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary2, position: {
                        x: boundary2.position.x - zelda.movespeed,
                        y: boundary2.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(zelda.movespeed, 0, zeldaRight)
    }

    if (keys.a == true || keys.A == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x + zelda.movespeed,
                        y: boundary.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries5.length; i++) {
            const boundary2 = boundaries5[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary2, position: {
                        x: boundary2.position.x + zelda.movespeed,
                        y: boundary2.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(-zelda.movespeed, 0, zeldaLeft)
    }
}

function movement2() {
    let walking = true

    if (keys.w == true || keys.W == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y + zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries6.length; i++) {
            const boundary3 = boundaries6[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary3, position: {
                        x: boundary3.position.x,
                        y: boundary3.position.y + zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(0, -zelda.movespeed, zeldaUp)
    }

    if (keys.s == true || keys.S == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y - zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries6.length; i++) {
            const boundary3 = boundaries6[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary3, position: {
                        x: boundary3.position.x,
                        y: boundary3.position.y - zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(0, zelda.movespeed, zeldaDown)
    }

    if (keys.d == true || keys.D == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x - zelda.movespeed,
                        y: boundary.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries6.length; i++) {
            const boundary3 = boundaries6[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary3, position: {
                        x: boundary3.position.x - zelda.movespeed,
                        y: boundary3.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(zelda.movespeed, 0, zeldaRight)
    }

    if (keys.a == true || keys.A == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x + zelda.movespeed,
                        y: boundary.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries6.length; i++) {
            const boundary3 = boundaries6[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary3, position: {
                        x: boundary3.position.x + zelda.movespeed,
                        y: boundary3.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(-zelda.movespeed, 0, zeldaLeft)
    }
}

function movement3() {
    let walking = true

    if (keys.w == true || keys.W == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y + zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries7.length; i++) {
            const boundary4 = boundaries7[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary4, position: {
                        x: boundary4.position.x,
                        y: boundary4.position.y + zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(0, -zelda.movespeed, zeldaUp)
    }

    if (keys.s == true || keys.S == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y - zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries7.length; i++) {
            const boundary4 = boundaries7[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary4, position: {
                        x: boundary4.position.x,
                        y: boundary4.position.y - zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(0, zelda.movespeed, zeldaDown)
    }

    if (keys.d == true || keys.D == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x - zelda.movespeed,
                        y: boundary.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries7.length; i++) {
            const boundary4 = boundaries7[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary4, position: {
                        x: boundary4.position.x - zelda.movespeed,
                        y: boundary4.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(zelda.movespeed, 0, zeldaRight)
    }

    if (keys.a == true || keys.A == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x + zelda.movespeed,
                        y: boundary.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        for (let i = 0; i < boundaries7.length; i++) {
            const boundary4 = boundaries7[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary4, position: {
                        x: boundary4.position.x + zelda.movespeed,
                        y: boundary4.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(-zelda.movespeed, 0, zeldaLeft)
    }
}

function movement4() {
    let walking = true

    if (keys.w == true || keys.W == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y + zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(0, -zelda.movespeed, zeldaUp)
    }

    if (keys.s == true || keys.S == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y - zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(0, zelda.movespeed, zeldaDown)
    }

    if (keys.d == true || keys.D == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x - zelda.movespeed,
                        y: boundary.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(zelda.movespeed, 0, zeldaRight)
    }

    if (keys.a == true || keys.A == true) {
        zelda.walking = true
        for (let i = 0; i < boundaries1.length; i++) {
            const boundary = boundaries1[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x + zelda.movespeed,
                        y: boundary.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(-zelda.movespeed, 0, zeldaLeft)
    }
}

function movement5() {
    let walking = true

    if (keys.w == true || keys.W == true) {
        zelda.walking = true
        for (let i = 0; i < bossBoundaries.length; i++) {
            const boundary = bossBoundaries[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y + zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(0, -zelda.movespeed, zeldaUp)
    }

    if (keys.s == true || keys.S == true) {
        zelda.walking = true
        for (let i = 0; i < bossBoundaries.length; i++) {
            const boundary = bossBoundaries[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y - zelda.movespeed
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(0, zelda.movespeed, zeldaDown)
    }

    if (keys.d == true || keys.D == true) {
        zelda.walking = true
        for (let i = 0; i < bossBoundaries.length; i++) {
            const boundary = bossBoundaries[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x - zelda.movespeed,
                        y: boundary.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(zelda.movespeed, 0, zeldaRight)
    }

    if (keys.a == true || keys.A == true) {
        zelda.walking = true
        for (let i = 0; i < bossBoundaries.length; i++) {
            const boundary = bossBoundaries[i]
            if (
                anycollision({
                    object1: zelda,
                    object2: {...boundary, position : {
                        x: boundary.position.x + zelda.movespeed,
                        y: boundary.position.y
                    }}
                })
            ) {
                walking = false
                break
            }
        }

        if (walking == true) walk(-zelda.movespeed, 0, zeldaLeft)
    }
}


// ENEMY MOVEMENT FUNCTIONS
/*
Uses similar logic to the Zelda movement functions
Main difference is the enemies have a xdirection property
If it is true then they will move +movespeed, if it is false they will move -movespeed
EX: Enemy starts moving +movespeed as enemy.xdirection is true
Enemy collides with boundary enemy.xdirection will now be false
Enemy will now move -movespeed
If I use both enemyMovex and enemyMovey on the same enemy they will move diagonally
*/
function enemyMovex( enemy ) {
    for (let i = 0; i < boundaries1.length; i++) {
        const boundary = boundaries1[i]
        if (
            anycollision({
                object1: enemy,
                object2: {...boundary, position: {
                    x: boundary.position.x - enemy.movespeed,
                    y: boundary.position.y
                }}
            })
        ) {
            enemy.xdirection = false
            break
        }
        else if (
            anycollision({
                object1: enemy,
                object2: {...boundary, position: {
                    x: boundary.position.x + enemy.movespeed,
                    y: boundary.position.y
                }}
            })
        ) {
            enemy.xdirection = true
            break
        }
    }
    if (enemy.xdirection) enemy.position.x += enemy.movespeed
    else enemy.position.x -= enemy.movespeed
}

function enemyMovey( enemy ) {
    for (let i = 0; i < boundaries1.length; i++) {
        const boundary = boundaries1[i]
        if (
            anycollision({
                object1: enemy,
                object2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y - enemy.movespeed
                }}
            })
        ) {
            enemy.ydirection = false
            break
        }
        else if (
            anycollision({
                object1: enemy,
                object2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y + enemy.movespeed
                }}
            })
        ) {
            enemy.ydirection = true
            break
        }
    }
    if (enemy.ydirection) enemy.position.y += enemy.movespeed
    else enemy.position.y -= enemy.movespeed
}

// Collision function for the trees in level 3 so the enemies don't walk through these trees
function enemyMove7( enemy ) {
    for (let i = 0; i < boundaries7.length; i++) {
        const boundary = boundaries7[i]
        if (
            anycollision({
                object1: enemy,
                object2: {...boundary, position: {
                    x: boundary.position.x - enemy.movespeed,
                    y: boundary.position.y
                }}
            })
        ) {
            enemy.xdirection = false
            break
        }
        else if (
            anycollision({
                object1: enemy,
                object2: {...boundary, position: {
                    x: boundary.position.x + enemy.movespeed,
                    y: boundary.position.y
                }}
            })
        ) {
            enemy.xdirection = true
            break
        }
    }
}

/*
Movement function for Keese
They are not restricted by any boundaries
Uses similar logic to the triBeam vectors
But the position of Zelda is continuously updated
So the Keese will home in on Zelda rather than go to where
Zelda was when they started their movement.
*/
function keeseMove( enemy ) {
    var dirx = (enemy.position.x - (zelda.position.x + zelda.width / 2))
    var diry = (enemy.position.y - (zelda.position.y + zelda.height / 2))
    var pyth = Math.hypot(dirx, diry)
    keeseSpeedx = (dirx / pyth) * enemy.movespeed
    keeseSpeedy = (diry / pyth) * enemy.movespeed
    enemy.position.x -= keeseSpeedx
    enemy.position.y -= keeseSpeedy
}

// Movement for Ganon
function ganonMovex( enemy ) {
    for (let i = 0; i < bossBoundaries.length; i++) {
        const boundary = bossBoundaries[i]
        if (
            anycollision({
                object1: enemy,
                object2: {...boundary, position: {
                    x: boundary.position.x - 5,
                    y: boundary.position.y
                }}
            })
        ) {
            enemy.xdirection = false
            break
        }
        else if (
            anycollision({
                object1: enemy,
                object2: {...boundary, position: {
                    x: boundary.position.x + 5,
                    y: boundary.position.y
                }}
            })
        ) {
            enemy.xdirection = true
            break
        }
    }
    if (enemy.xdirection) enemy.position.x += enemy.movespeed
    else enemy.position.x -= enemy.movespeed
}

function ganonMovey( enemy ) {
    for (let i = 0; i < bossBoundaries.length; i++) {
        const boundary = bossBoundaries[i]
        if (
            anycollision({
                object1: enemy,
                object2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y - 5
                }}
            })
        ) {
            enemy.ydirection = false
            break
        }
        else if (
            anycollision({
                object1: enemy,
                object2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y + 5
                }}
            })
        ) {
            enemy.ydirection = true
            break
        }
    }
    if (enemy.ydirection) enemy.position.y += enemy.movespeed
    else enemy.position.y -= enemy.movespeed
}

/* 
Functions to randomize when Ganon switches directions
So that he doesn't move the same way each playthrough
And to slightly increase the difficulty
*/
function ganonRandomx() {
    if (level == 5) {
        var minx = 5
        var maxx = 10
        var randx = Math.floor(Math.random() * (maxx - minx + 1) + minx)
        setTimeout(() => {
            if (Ganon.xdirection) Ganon.xdirection = false
            else Ganon.xdirection = true
            ganonRandomx()
        }, randx * 1000)
    }
}

function ganonRandomy() {
    if (level == 5) {
        var miny = 5
        var maxy = 10
        var randy = Math.floor(Math.random() * (maxy - miny + 1) + miny)
        setTimeout(() => {
            if (Ganon.xdirection) Ganon.xdirection = false
            else Ganon.xdirection = true
            ganonRandomy()
        }, randy * 1000)
    }
}


// CHEST INTERACTIONS
/* 
Checks for collisions between the chests and Zelda
Probably could have used variables so that this function
Wouldn't have to be copy pasted multiple times
Moves the relevant Triforce sprite to above Zelda's head
*/
function chestMap5check() {
    const chestBoundary5 = chestBound5[0]
    if (
        anycollision({
            object1: zelda,
            object2: chestBoundary5
        })
        ) {
            zelda.cols = 1
            zelda.frameCount.val = 0
            zelda.image = zeldaTri
            tri1.position.x = zelda.position.x - 4
            tri1.position.y = zelda.position.y - 28
            chest.position.x = 256
            chest.position.y = 544
            chestcheck.check = true
        }
}

function chestMap6check() {
    const chestBoundary6 = chestBound6[0]
    if (
        anycollision({
            object1: zelda,
            object2: chestBoundary6
        })
        ) {
            zelda.cols = 1
            zelda.frameCount.val = 0
            zelda.image = zeldaTri
            tri2.position.x = zelda.position.x - 4
            tri2.position.y = zelda.position.y - 28
            chest.position.x = 1152
            chest.position.y = 672
            chestcheck.check = true
        }
}

function chestMap7check() {
    const chestBoundary7 = chestBound7[0]
    if (
        anycollision({
            object1: zelda,
            object2: chestBoundary7
        })
        ) {
            zelda.cols = 1
            zelda.frameCount.val = 0
            zelda.image = zeldaTri
            tri3.position.x = zelda.position.x - 4
            tri3.position.y = zelda.position.y - 28
            chest.position.x = 528
            chest.position.y = 128
            chestcheck.check = true
        }
}

function portalsCheck() {
    if (
        anycollision({
            object1: zelda,
            object2: portals
        })
        ) {
            zelda.frameCount.val = 0
            zelda.image = zeldaDown
            chestcheck.check = true
        }
}


// FADE AND UNFADE TO WHITE AFTER CHEST
/*
If Zelda collides with a chest chestcheck.check is set to true
The chestSound jingle plays and the screen fades to white
Zelda's position is reset back to the start with the Triforce above her head still
And the screen unfades.  Then the next dialogue function is activated
By setting the next dialogueNumber to 1, the fadeTimer to 0
And calling the level function for the next level
The Keese positions are reset so that they start from the same place each time
I didn't reset the positions of the skeletons and Knights to introduce some level of randomness
In the 3rd fadechest function I reset the Knights' health to 5 so they don't get one shot
I also reset the health of the skeletons, but that actually isn't necessary
As even if the health of skeletons are 0 they aren't spliced until
They are hit by a triBeam
*/
function fadechest1(){
    if (level == 1 && chestcheck.check == true && cf.globalAlpha < .99 && fadeTimer < 206) {
        alphaUnfade('white')
        hyruleField.pause()
        chestSound.play()
    }
    if (chestcheck.check == true) {
        fadeTimer += 1
    }
    if (fadeTimer > 205 && fadeTimer < 226 && level == 1){
        hyruleField.currentTime = 0
        cd.clearRect(0, 0, canvasDial.width, canvasDial.height)
        zelda.cols = 4
        zelda.image = zeldaDown
        zelda.position.x = 255
        zelda.position.y = 80
        tri1.position.x = zelda.position.x - 4
        tri1.position.y = zelda.position.y - 28
        chest.position.x = -100
        chest.position.y = -100
        health = 4
        i = 1
    }
    else if (fadeTimer > 225 && fadeTimer < 431) {
        alphaFade('white')
        c.clearRect(0, 0, canvas.width, canvas.height)
        c.drawImage(map2, 0, 0, 1360, 848)
        zelda.draw()
        tri1.draw()
    }
    else if (fadeTimer > 430 && level == 1) {
        level = 2
        dialogueNumber2 = 1
        chestcheck.check = false
        level2()
        fadeTimer = 0
    }
}

function fadechest2(){
    if (level == 2 && chestcheck.check == true && cf.globalAlpha < .99 && fadeTimer2 < 206) {
        alphaUnfade('white')
        hyruleField.pause()
        chestSound.play()
    }
    if (chestcheck.check == true && level == 2) {
        fadeTimer2 += 1
    }
    if (fadeTimer2 > 205 && fadeTimer2 < 226 && level == 2){
        hyruleField.currentTime = 0
        cd.clearRect(0, 0, canvasDial.width, canvasDial.height)
        zelda.cols = 4
        zelda.image = zeldaDown
        zelda.position.x = 255
        zelda.position.y = 80
        tri2.position.x = zelda.position.x - 4
        tri2.position.y = zelda.position.y - 28
        chest.position.x = -100
        chest.position.y = -100
        health = 4
        i = 1
    }
    else if (fadeTimer2 > 225 && fadeTimer2 < 431) {
        alphaFade('white')
        c.clearRect(0, 0, canvas.width, canvas.height)
        c.drawImage(map3, 0, 0, 1360, 848)
        zelda.draw()
        tri2.draw()
    }
    else if (fadeTimer2 > 430 && level == 2) {
        level = 3
        dialogueNumber3 = 1
        keese1.position.x = 800
        keese1.position.y = 550
        keese2.position.x = 1260
        keese2.position.y = 340
        chestcheck.check = false
        level3()
        fadeTimer2 = 0
    }
}

function fadechest3(){
    if (level == 3 && chestcheck.check == true && cf.globalAlpha < .99 && fadeTimer3 < 206) {
        alphaUnfade('white')
        hyruleField.pause()
        chestSound.play()
    }
    if (chestcheck.check == true && level == 3) {
        fadeTimer3 += 1
    }
    if (fadeTimer3 > 205 && fadeTimer3 < 226 && level == 3){
        hyruleField.currentTime = 0
        cd.clearRect(0, 0, canvasDial.width, canvasDial.height)
        zelda.cols = 4
        zelda.image = zeldaDown
        zelda.position.x = 255
        zelda.position.y = 80
        tri3.position.x = zelda.position.x - 4
        tri3.position.y = zelda.position.y - 28
        chest.position.x = -100
        chest.position.y = -100
        health = 4
        i = 1
    }
    else if (fadeTimer3 > 225 && fadeTimer3 < 431) {
        alphaFade('white')
        c.clearRect(0, 0, canvas.width, canvas.height)
        c.drawImage(map4, 0, 0, 1360, 848)
        zelda.draw()
        tri3.draw()
    }
    else if (fadeTimer3 > 430 && level == 3) {
        level = 4
        dialogueNumber4 = 1
        keese1.position.x = 800
        keese1.position.y = 550
        keese2.position.x = 1260
        keese2.position.y = 340
        keese3.position.x = 460
        keese3.position.y = 640
        keese4.position.x = 30
        keese4.position.y = 540
        skel1.health = 1
        skel2.health = 1
        skel3.health = 1
        skel4.health = 1
        skel5.health = 1
        skel6.health = 1
        skel7.health = 1
        skel8.health = 1
        skel9.health = 1
        skel10.health = 1
        skel11.health = 1
        knight1.health = 5
        knight2.health = 5
        knight3.health = 5
        knight4.health = 5
        chestcheck.check = false
        level4()
        fadeTimer3 = 0
    }
}

function fadePortals(){
    if (level == 4 && chestcheck.check == true && cf.globalAlpha < .99 && fadeTimer4 < 206) {
        alphaUnfade('white')
        hyruleField.pause()
        chestSound.play()
    }
    if (chestcheck.check == true && level == 4) {
        fadeTimer4 += 1
    }
    if (fadeTimer4 > 205 && fadeTimer4 < 226 && level == 4){
        hyruleField.currentTime = 0
        cd.clearRect(0, 0, canvasDial.width, canvasDial.height)
        zelda.cols = 4
        zelda.image = zeldaDown
        zelda.position.x = 680
        zelda.position.y = 500
        chest.position.x = -100
        chest.position.y = -100
        health = 4
        i = 1
    }
    else if (fadeTimer4 > 225 && fadeTimer4 < 431) {
        alphaFade('white')
        c.clearRect(0, 0, canvas.width, canvas.height)
        c.drawImage(map5, 0, 0, 1360, 848)
        zelda.draw()
    }
    else if (fadeTimer4 > 430 && level == 4) {
        level = 5
        chestcheck.check = false
        dialogueNumber5 = 1
        level5()
        ganonRandomx()
        ganonRandomy()
        fadeTimer4 = 0
    }
}

function fadeGanon(){
    if (level == 5 && cf.globalAlpha < .99 && fadeTimer5 < 206 && dialogueFade == 1) {
        alphaUnfade('white')
        bossMusic.pause()
    }
    if (dialogueFade == 1 && level == 5) {
        fadeTimer5 += 1
    }
    if (fadeTimer5 > 205 && fadeTimer5 < 226 && level == 5){
        bossMusic.currentTime = 0
        cd.clearRect(0, 0, canvasDial.width, canvasDial.height)
        health = 4
        i = 1
    }
    else if (fadeTimer5 > 225 && fadeTimer5 < 431) {
        alphaFade('white')
        c.clearRect(0, 0, canvas.width, canvas.height)
        c.fillStyle = 'black'
        c.fillRect(0, 0, canvas.width, canvas.height)
        zelda.cols = 4
        zelda.image = zeldaDown
        zelda.position.x = 680
        zelda.position.y = 420
    }
    else if (fadeTimer5 > 430 && level == 5) {
        level = 6
        i = .995
        alphaUnfade('black')
        level6()
        fadeTimer5 = 0
    }
}


// DAMAGE FUNCTION
/* 
Detects collision between Zelda and an enemy and reduces Zelda's health by 1
There is a timer so that you don't instantly die when you touch an enemy
Turns canvasFade red and cf.globalAlpha to .2 to momentarily flash the screen a see-through red
*/
function damage( enemy ) {
    if (
        anycollision({
            object1: zelda,
            object2: enemy
        })
    ) {
        if (healthTimer == 0) {
            health -= 1
            healthTimer += 1
            cf.clearRect(0, 0, canvasFade.width, canvasFade.height)
            cf.globalAlpha = .2
            cf.fillStyle = 'red'
            cf.fillRect(0, 0, canvasFade.width, canvasFade.height)
        }
    }
}

function healthTimernumber(){
    if (healthTimer > 0 && healthTimer < 5) healthTimer += 1
    else if (healthTimer > 4 && healthTimer < 60) {
        cf.clearRect(0, 0, canvasFade.width, canvasFade.height)
        cf.globalAlpha = 0
        healthTimer += 1
    }
    else if (healthTimer >59) healthTimer = 0
}



// GAME OVER FUNCTION
/*
If health reaches 0, stops the game and fades to black
After pressing x fully resets all the variables except
For the positions of the skeletons and knights and
Starts from the start screen again
Knight3 and Knight4 positions are reset so they don't spawn behind the last set of trees in level 3 on a replay.
*/
function gameOver() {
    if (health == 0) {
        let gameOverid = setTimeout(() => {
            window.requestAnimationFrame(gameOver)
        }, 1000 / fps)
        hyruleField.pause()
        gameoverSound.play()
        gameoverTimer += 1
        healthBar.image = health0
        healthBar.draw()
        level = -3
        alphaUnfade('black')
        if (gameoverTimer > 300) cf.drawImage(gameoverImage, 450, 200, 502, 137)
        if (gameoverTimer > 450) cf.drawImage(xRestart, 435, 450, 526, 84)

        if (keys.x || keys.X) {
            window.cancelAnimationFrame(gameOverid)
            gameoverSound.pause()
            gameoverSound.currentTime = 0
            hyruleField.currentTime = 0
            bossMusic.currentTime = 0
            endTheme.currentTime = 0
            level = -1
            cf.clearRect(0, 0, canvasFade.width, canvasFade.height)
            cf.globalAlpha = 1
            cd.clearRect(0, 0, canvasDial.width, canvasDial.height)
            i = 1
            j = .005
            openTimer = 0
            gameoverTimer = 0
            proTimer = 0
            endTimer = 0
            health = 4
            zelda.image = zeldaDown
            fadeTimer = 0
            keese1.position.x = 800
            keese1.position.y = 550
            keese2.position.x = 1260
            keese2.position.y = 340
            keese3.position.x = 460
            keese3.position.y = 640
            keese4.position.x = 30
            keese4.position.y = 540
            keese5.position.x = 30
            keese5.position.y = 800
            keese6.position.x = 600
            keese6.position.y = 540
            keese7.position.x = 900
            keese7.position.y = 30
            knight3.position.x = 700
            knight3.position.y = 480
            knight4.position.x = 490
            knight4.position.y = 230
            Ganon.position.x = 625
            Ganon.position.y = 180
            Ganon.health = 60
            Ganon.image = GanonBack
            level2Enemies = [skel1, skel2, skel3, skel4, skel5, skel6]
            level2Keese = [keese1, keese2]
            level3Enemies = [skel1, skel2, skel3, skel4, skel5, skel6, skel7, skel8, skel9, skel10, skel11, knight1, knight2, knight3, knight4]
            level3Keese = [keese1, keese2, keese3, keese4]
            level4Enemies = [skel1, skel2, skel3, skel4, skel5, skel6, skel7, skel8, skel9, skel10, skel11, skel12, skel13, skel14, skel15, knight1, knight2, knight3, knight4, knight5, knight6, knight7, knight8]
            level4Keese = [keese1, keese2, keese3, keese4, keese5, keese6, keese7]
            keese1.health = 1
            keese2.health = 1
            keese3.health = 1
            keese4.health = 1
            keese5.health = 1
            keese6.health = 1
            keese7.health = 1
            skel1.health = 1
            skel2.health = 1
            skel3.health = 1
            skel4.health = 1
            skel5.health = 1
            skel6.health = 1
            skel7.health = 1
            skel8.health = 1
            skel9.health = 1
            skel10.health = 1
            skel11.health = 1
            skel12.health = 1
            skel13.health = 1
            skel14.health = 1
            skel15.health = 1
            knight1.health = 5
            knight2.health = 5
            knight3.health = 5
            knight4.health = 5
            knight5.health = 5
            knight6.health = 5
            knight7.health = 5
            knight8.health = 5
            chestcheck.check = false
            tri1.position.x = -120
            tri1.position.y = -130
            tri2.position.x = -120
            tri2.position.y = -130
            tri3.position.x = -120
            tri3.position.y = -130
            dialogueNumber = -1
            dialogueNumber2 = -1
            dialogueNumber3 = -1
            dialogueNumber4 = -1
            dialogueNumber5 = -1
            dialogueNumber6 = 0
            dialogueFade = 0
            openingFade()
            openingScreen()
        }
    }
}


