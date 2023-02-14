// CANVAS
/*
Create canvas and set constant c to be able to draw on the canvas
There are three canvases stacked on top of eachother
The first canvas is where most of the action happens
The second canvas is for fading to black or white or flashing the screen red
The third canvas is for the dialogue boxes
I also use the three canvases to create fade effects for text in the ending
*/
const canvas = document.querySelector('#game-layer')
const c = canvas.getContext('2d')
const canvasFade = document.querySelector('#fade-layer')
const cf = canvasFade.getContext('2d')
const canvasDial = document.querySelector('#dialogue-layer')
const cd = canvasDial.getContext('2d')

/* 
* Set canvas height and width to match size of map
* I tried setting the canvas dimensions and everything in styles.css but it just broke everything for some reason
* So I just set the dimensions here
*/
canvas.height = 848
canvas.width = 1360
canvasFade.height = 848
canvasFade.width = 1360
canvasDial.height = 848
canvasDial.width = 1360
cf.globalAlpha = 1.0


// CONSTANTS AND VARIABLES
var level = -2
var health = 4
var healthTimer = 0
var i = 1
var j = 0.005
var openTimer = 0
var proTimer = 0
var gameoverTimer = 0
var endTimer = 0
var dialogueNumber = -1
var dialogueTimer = 0
var dialogueNumber2 = -1
var dialogueTimer2 = 0
var dialogueNumber3 = -1
var dialogueTimer3 = 0
var dialogueNumber4 = -1
var dialogueTimer4 = 0
var dialogueNumber5 = -1
var dialogueTimer5 = 0
var dialogueNumber6 = 0
var dialogueTimer6 = 0
var dialogueFade = 0
var fadeTimer = 0
var fadeTimer2 = 0
var fadeTimer3 = 0
var fadeTimer4 = 0
var fadeTimer5 = 0
var mouseX = 0.0
var mouseY = 0.0
var mousedowncheck = 0
var triBeamlist = []
var triBeamtimer = 1
var ganonBeamlist = []
var ganonshooton = false
const fps = 60
const collisionsMap1 = []
const collisionsMap5 = []
const collisionsMap6 = []
const collisionsMap7 = []
const bosscollisionsMap = []
const boundaries1 = []
const boundaries5 = []
const boundaries6 = []
const boundaries7 = []
const bossBoundaries = []
const chestMap5 = []
const chestBound5 = []
const chestMap6 = []
const chestBound6 = []
const chestMap7 = []
const chestBound7 = []
const chestcheck = {
    check: false
}
const keys = {}
var level1Enemies = [skel1, skel2]
var level2Enemies = [skel1, skel2, skel3, skel4, skel5, skel6]
var level2Keese = [keese1, keese2]
var level3Enemies = [skel1, skel2, skel3, skel4, skel5, skel6, skel7, skel8, skel9, skel10, skel11, knight1, knight2, knight3, knight4]
var level3Keese = [keese1, keese2, keese3, keese4]
var level4Enemies = [skel1, skel2, skel3, skel4, skel5, skel6, skel7, skel8, skel9, skel10, skel11, skel12, skel13, skel14, skel15, knight1, knight2, knight3, knight4, knight5, knight6, knight7, knight8]
var level4Keese = [keese1, keese2, keese3, keese4, keese5, keese6, keese7]


// MAP BOUNDARIES
/*
The collisions for the map were made in Tiled and exported as a json
I extracted the data for boundaries that I made in Tiled and put them in 
The js files in the data folder and then converted that array into a 2D array
So that I could loop through the data correctly when checking for collisions
i increases by increments of 85 because i is the number of tiles wide the map is in the program Tiled
So each row of the map is 85 tiles wide, so each row of the array will have 85 values in it
Blank spaces are represented by 0 in the data arrays and the boundaries are represented by 2060
Which refers to the light red I used to draw the boundaries in Tiled
I then put all the 2060's into the boundaries array and set their position by multiplying
Their row and column position by 16, which is the size of each tile in Tiled
The row number i represents the y position and the column number j represents the x position
Credit to Chris Courses Pokemon JavaScript Game Tutorial for this method
He helped a lot in getting me started on the foundation for this project
*/
for (let i = 0; i < collisions1.length; i += 85) {
    collisionsMap1.push(collisions1.slice(i, 85 + i))
}
collisionsMap1.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 2060)
            boundaries1.push(
                new Boundaries({
                    position: {
                        x: j * 16,
                        y: i * 16
                    }
                })
            )
    })
})

for (let i = 0; i < collisions5.length; i += 85) {
    collisionsMap5.push(collisions5.slice(i, 85 + i))
}
collisionsMap5.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 2060)
        boundaries5.push(
            new Boundaries({
                position: {
                    x: j * 16,
                    y: i * 16
                }
            })
        )
    })
})

for (let i = 0; i < collisions6.length; i += 85) {
    collisionsMap6.push(collisions6.slice(i, 85 + i))
}
collisionsMap6.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 2060)
        boundaries6.push(
            new Boundaries({
                position: {
                    x: j * 16,
                    y: i * 16
                }
            })
        )
    })
})

for (let i = 0; i < collisions7.length; i += 85) {
    collisionsMap7.push(collisions7.slice(i, 85 + i))
}
collisionsMap7.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 2060)
        boundaries7.push(
            new Boundaries({
                position: {
                    x: j * 16,
                    y: i * 16
                }
            })
        )
    })
})

for (let i = 0; i < bosscollisions.length; i += 85) {
    bosscollisionsMap.push(bosscollisions.slice(i, 85 + i))
}
bosscollisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 130)
        bossBoundaries.push(
            new Boundaries({
                position: {
                    x: j * 16,
                    y: i * 16
                }
            })
        )
    })
})

for (let i = 0; i < chest5.length; i += 85) {
    chestMap5.push(chest5.slice(i, 85 + i))
}
chestMap5.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 175)
        chestBound5.push(
            new Boundaries({
                position: {
                    x: j * 16,
                    y: i * 16
                }
            })
        )
    })
})

for (let i = 0; i < chest6.length; i += 85) {
    chestMap6.push(chest6.slice(i, 85 + i))
}
chestMap6.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 175)
        chestBound6.push(
            new Boundaries({
                position: {
                    x: j * 16,
                    y: i * 16
                }
            })
        )
    })
})
for (let i = 0; i < chest7.length; i += 85) {
    chestMap7.push(chest7.slice(i, 85 + i))
}
chestMap7.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 175)
        chestBound7.push(
            new Boundaries({
                position: {
                    x: j * 16,
                    y: i * 16
                }
            })
        )
    })
})


// START BUTTON
// Start button so the game doesn't just start suddenly upon opening the page
let canvasgame = new CanvasGame()

function startGame() {
    canvasgame.start()
}

// Function for the opening fade from black for the start screen
function openingFade() {
    if (level == -1) {
        const openingFadeid = setTimeout(() => {
            window.requestAnimationFrame(openingFade)
        }, 1000 / fps)
        if (cf.globalAlpha > 0.00001) {
            alphaFade('black')
        }
    } else {
        window.cancelAnimationFrame(openingFade)
        return
    }
}

/* 
Function for the background and the title logo for the Start screen
Starts the game by pressing Z
*/
function openingScreen() {
    if (level == -1) {
        const openFrameid = setTimeout(() => {
            window.requestAnimationFrame(openingScreen)
        }, 1000 / fps)

        openTimer += 1

        c.drawImage(openBackground, 0, 0, canvas.width, canvas.height)

        if (openTimer > 314) c.drawImage(titleLogo, 250, 60, 900, 675)

        if (openTimer > 360) {
            zStart.globalAlpha = 0
            c.drawImage(zStart, 450, 600, 483, 98)
            zStart.globalAlpha += 0.01
        }

        openMusic.play()

        if (keys.z == true || keys.Z == true) {
            window.cancelAnimationFrame(openFrameid)
            openMusic.pause()
            openMusic.currentTime = 0
            level = 0
            cf.clearRect(0, 0, canvasFade.width, canvasFade.height)
            cf.globalAlpha = 0
            i = 0
            prologue()
        }

        zelda.position.x = 255
        zelda.position.y = 80
    }
}


// PROLOGUE
/* 
Function for the L i n k . . . prologue.  Uses a timer to set the time between each image change
Can press X to skip which I think I'll just leave in
*/
function prologue() {
    if (level == 0) {
        setTimeout(() => {
            window.requestAnimationFrame(prologue)
        }, 1000 / fps)

        proTimer += 1

        if (proTimer >= 0 && proTimer < 39) {
            c.clearRect(0, 0, canvas.width, canvas.height)
            c.fillStyle = 'black'
            c.fillRect(0, 0, canvas.width, canvas.height)
        }
        else if (proTimer == 40 || proTimer == 80 || proTimer == 120 || proTimer == 160 || proTimer == 200 || proTimer == 240 || 
            proTimer == 280 || proTimer == 380 || proTimer == 400 || proTimer == 420 || proTimer == 440 || proTimer == 460 || 
            proTimer == 480 || proTimer == 500 || proTimer == 590) dootSound.play()
        else if (proTimer > 41 && proTimer < 80) c.drawImage(lText, 600, 300, lText.width, lText.height)
        else if (proTimer > 80 && proTimer < 120) c.drawImage(liText, 600, 300, liText.width, liText.height)        
        else if (proTimer > 120 && proTimer < 160) c.drawImage(linText, 600, 300, linText.width, linText.height)
        else if (proTimer > 160 && proTimer < 200) c.drawImage(linkText, 600, 300, linkText.width, linkText.height)
        else if (proTimer > 200 && proTimer < 240) c.drawImage(link1Text, 600, 300, link1Text.width, link1Text.height)
        else if (proTimer > 240 && proTimer < 280) c.drawImage(link2Text, 600, 300, link2Text.width, link2Text.height)
        else if (proTimer > 280 && proTimer < 340) c.drawImage(link3Text, 600, 300, link3Text.width, link3Text.height)
        else if (proTimer > 339 && proTimer < 380) {
            c.clearRect(0, 0, canvas.width, canvas.height)
            c.fillStyle = 'black'
            c.fillRect(0, 0, canvas.width, canvas.height)
        }
        else if (proTimer > 380 && proTimer < 400) c.drawImage(lText, 600, 300, lText.width, lText.height)
        else if (proTimer > 400 && proTimer < 420) c.drawImage(liText, 600, 300, liText.width, liText.height)
        else if (proTimer > 420 && proTimer < 440) c.drawImage(linText, 600, 300, linText.width, linText.height)
        else if (proTimer > 440 && proTimer < 460) c.drawImage(linkText, 600, 300, linkText.width, linkText.height)
        else if (proTimer > 460 && proTimer < 480) c.drawImage(link1Text, 600, 300, link1Text.width, link1Text.height)
        else if (proTimer > 480 && proTimer < 500) c.drawImage(link2Text, 600, 300, link2Text.width, link2Text.height)
        else if (proTimer > 500 && proTimer < 560) c.drawImage(link3Text, 600, 300, link3Text.width, link3Text.height)
        else if (proTimer > 560 && proTimer < 590) {
            c.clearRect(0, 0, canvas.width, canvas.height)
            c.fillStyle = 'black'
            c.fillRect(0, 0, canvas.width, canvas.height)
        }
        else if (proTimer > 590 && proTimer < 650) c.drawImage(linkexText, 600, 300, linkexText.width, linkexText.height)
        else if (proTimer > 649 && proTimer < 690) {
            c.clearRect(0, 0, canvas.width, canvas.height)
            c.fillStyle = 'black'
            c.fillRect(0, 0, canvas.width, canvas.height)
            cf.globalAlpha = 1
            i = 1
        }
        else if (proTimer > 689 && proTimer < 900){
            alphaFade('black')
            c.drawImage(map, 0, 0, 1360, 848)
            c.drawImage(foreground, 0, 0, 1360, 848)
            zelda.draw()
            chest.draw()
        }
        else if (proTimer > 899 && cf.globalAlpha == 0){
            level = 1
            dialogueNumber = 1
            level1()
        }
        if (keys.x || keys.X) {
            level = 1
            dialogueNumber = 1
            level1()
        }
    }
}


// LEVEL1 FUNCTION
/* 
Set FPS to 60 so that animations perform at the same speed no matter what the refresh rate of a monitor is
I found out about this problem because my level1 monitor is 144Hz and my other monitor is 60Hz
The level1 monitor was running the game over twice as fast as my other monitor 
Strangely everything was timed perfectly with the fps set at 60, but I recently upgraded my computer
And now everything times out perfectly when the fps is set at 70 for my current setup
Not sure what's going on with that
Also, I tried to make one level function to run the whole game with a bunch of if conditions
But this method created too many bugs so I just created multiple level functions for each level
*/
function level1() {
    if (level == 1) {
        // Have requestAnimationFrame make a new request after a set Timeout that is equal to 1000 / 60
        setTimeout(() => {
            requestAnimationFrame(level1)
        }, 1000 / fps)
        
        /*
        Draws the map on canvas c
        The order in which the images are drawn matter as the images drawn
        Afterwards overlap the ones drawn before, so the map is drawn first
        Before all other images
        */
        c.drawImage(map, 0, 0, 1360, 848)

        if (chestcheck.check == false) hyruleField.play()

        chest.draw()
        
        // Draws the triforce offscreen until it is brought onscreen by fadechest1
        tri1.draw()
        
        // Draws each an enemy on the screen for each enemy in the level1Enemies array
        level1Enemies.forEach(Enemy => Enemy.draw(this.c))

        zelda.draw()

        // Changes the healthbar image based on Zelda's current health
        if (health == 4) healthBar.image = health4
        else if (health == 3) healthBar.image = health3
        else if (health == 2) healthBar.image = health2
        else if (health == 1) healthBar.image = health1

        healthBar.draw()

        /*
        Draws the tops and sides of certain trees to create the illusion that Zelda and enemies
        Are walking under the trees
        */
        c.drawImage(foreground, 0, 0, 1360, 848)

        zelda.walking = false

        // Allows movement for Zelda after the dialogue is finished
        if (dialogueNumber == 0 && chestcheck.check == false) movement1()

        // Activates the enemyMove and damage function for each enemy in the level1Enemies array
        if (chestcheck.check == false) {
            level1Enemies.forEach((enemy) => {
                enemyMovex(enemy)
                damage(enemy)
            })
        }

        healthTimernumber()
        level1Dialogue()
        gameOver()
        chestMap5check()
        fadechest1()
    }
}


function level2() {
    if (level == 2) {
        // Have requestAnimationFrame make a new request after a set Timeout that is equal to 1000 / 60
        setTimeout(() => {
            requestAnimationFrame(level2)
        }, 1000 / fps)

        c.drawImage(map2, 0, 0, 1360, 848)

        if (chestcheck.check == false) hyruleField.play()

        chest.draw()

        tri1.draw()

        tri2.draw()
        
        level2Enemies.forEach(Enemy => Enemy.draw(this.c))

        // Timer for triBeam delay
        triBeamtimefunc()

        // Draws the triBeam for each triBeam in the triBeamlist array and also activates collision
        if (triBeamlist.length) {
            triBeamlist.forEach((triBeam, triBeamindex) => {
                triBeam.draw(this.c)
                triBeam.toMouse()
                collisionBeambound(triBeam, boundaries1, triBeamindex)
                collisionBeambound(triBeam, boundaries6, triBeamindex)
            })
        }

        zelda.draw()

        if (health == 4) healthBar.image = health4
        else if (health == 3) healthBar.image = health3
        else if (health == 2) healthBar.image = health2
        else if (health == 1) healthBar.image = health1

        healthBar.draw()

        c.drawImage(foreground, 0, 0, 1360, 848)

        level2Keese.forEach(Enemy => Enemy.draw(this.c))

        zelda.walking = false

        if (dialogueNumber2 == 0 && chestcheck.check == false) movement2()

        // Activates enemyMovex and enemyMovey for the enemies depending on their name
        if (chestcheck.check == false) {
            level2Enemies.forEach((enemy, index) => {
                if (enemy == skel1 || enemy == skel2 || enemy == skel3) enemyMovex(enemy)
                if (enemy == skel4 || enemy == skel5 || enemy == skel6) enemyMovey(enemy)
                // Zelda damage function if she touches an enemy
                damage(enemy)
                // Tribeam collision function to kill an enemy
                triBeamlist.forEach((triBeam, triBeamindex) => {
                    collisionBeam(triBeam, enemy, index, triBeamindex, level2Enemies)
                })
            })

            // Stops keese from moving until after dialogue ends
            if (dialogueNumber2 == 0) {
                level2Keese.forEach((enemy, keeseIndex) => {
                    keeseMove(enemy)
                    damage(enemy)
                    triBeamlist.forEach((triBeam, triBeamindex) => {
                        collisionBeam(triBeam, enemy, keeseIndex, triBeamindex, level2Keese)
                    })
                })
            }
        }

        healthTimernumber()
        level2Dialogue()
        gameOver()
        chestMap6check()
        fadechest2()
    }
}


function level3() {
    if (level == 3) {
        // Have requestAnimationFrame make a new request after a set Timeout that is equal to 1000 / 60
        setTimeout(() => {
            requestAnimationFrame(level3)
        }, 1000 / fps)

        c.drawImage(map3, 0, 0, 1360, 848)

        if (chestcheck.check == false) hyruleField.play()

        chest.draw()

        tri2.draw()

        tri3.draw()
        
        level3Enemies.forEach(Enemy => Enemy.draw(this.c))

        triBeamtimefunc()

        if (triBeamlist.length) {
            triBeamlist.forEach((triBeam, triBeamindex) => {
                triBeam.draw(this.c)
                triBeam.toMouse()
                collisionBeambound(triBeam, boundaries1, triBeamindex)
                collisionBeambound(triBeam, boundaries7, triBeamindex)
            })
        }

        zelda.draw()

        if (health == 4) healthBar.image = health4
        else if (health == 3) healthBar.image = health3
        else if (health == 2) healthBar.image = health2
        else if (health == 1) healthBar.image = health1

        healthBar.draw()

        c.drawImage(foreground, 0, 0, 1360, 848)

        level3Keese.forEach(Enemy => Enemy.draw(this.c))

        zelda.walking = false

        if (dialogueNumber3 == 0 && chestcheck.check == false) movement3()

        // Knight3 and Knight4 use both enemyMovex and enemyMovey to move them diagonally and make them harder to dodge
        if (chestcheck.check == false) {
            level3Enemies.forEach((enemy, index) => {
                if (enemy == skel1 || enemy == skel2 || enemy == skel3 || enemy == skel7 || 
                    enemy == skel10 || enemy == skel11 || enemy == knight3 || enemy == knight4) {
                        enemyMovex(enemy)
                    }
                if (enemy == skel4 || enemy == skel5 || enemy == skel6 || enemy == skel8 || 
                    enemy == skel9 || enemy == knight1 || enemy == knight2 || enemy == knight3 || enemy == knight4) {
                        enemyMovey(enemy)
                    }
                if (enemy == knight3 || enemy == knight4) enemyMove7(enemy)

                // The knights have different images for moving left and right so this updates their image based on their direction
                if (enemy == knight1 && enemy.ydirection) enemy.image = knightRight1
                else if (enemy == knight1 && enemy.ydirection == false) enemy.image = knightLeft1
                if (enemy == knight2 && enemy.ydirection) enemy.image = knightRight2
                else if (enemy == knight2 && enemy.ydirection == false) enemy.image = knightLeft2
                if (enemy == knight3 && enemy.xdirection) enemy.image = knightRight3
                else if (enemy == knight3 && enemy.xdirection == false) enemy.image = knightLeft3
                if (enemy == knight4 && enemy.xdirection) enemy.image = knightRight4
                else if (enemy == knight4 && enemy.xdirection == false) enemy.image = knightLeft4
            
                
                damage(enemy)
                triBeamlist.forEach((triBeam, triBeamindex) => {
                    collisionBeam(triBeam, enemy, index, triBeamindex, level3Enemies)
                })
            })
            
            if (dialogueNumber3 == 0) {
                level3Keese.forEach((enemy, keeseIndex) => {
                    keeseMove(enemy)
                    damage(enemy)
                    triBeamlist.forEach((triBeam, triBeamindex) => {
                        collisionBeam(triBeam, enemy, keeseIndex, triBeamindex, level3Keese)
                    })
                })
            }
        }

        healthTimernumber()
        level3Dialogue()
        gameOver()
        chestMap7check()
        fadechest3()
    }
}


function level4() {
    if (level == 4) {
        // Have requestAnimationFrame make a new request after a set Timeout that is equal to 1000 / 60
        setTimeout(() => {
            requestAnimationFrame(level4)
        }, 1000 / fps)

        c.drawImage(map4, 0, 0, 1360, 848)

        if (chestcheck.check == false) hyruleField.play()

        chest.draw()

        portals.draw()

        tri3.draw()
        
        level4Enemies.forEach(Enemy => Enemy.draw(this.c))

        triBeamtimefunc()

        if (triBeamlist.length) {
            triBeamlist.forEach((triBeam, triBeamindex) => {
                triBeam.draw(this.c)
                triBeam.toMouse()
                collisionBeambound(triBeam, boundaries1, triBeamindex)
            })
        }

        zelda.draw()

        if (health == 4) healthBar.image = health4
        else if (health == 3) healthBar.image = health3
        else if (health == 2) healthBar.image = health2
        else if (health == 1) healthBar.image = health1

        healthBar.draw()

        c.drawImage(foreground, 0, 0, 1360, 848)

        level4Keese.forEach(Enemy => Enemy.draw(this.c))

        zelda.walking = false

        if (dialogueNumber4 == 0 && chestcheck.check == false) movement4()

        if (chestcheck.check == false) {
            level4Enemies.forEach((enemy, index) => {
                if (enemy == skel1 || enemy == skel2 || enemy == skel3 || enemy == skel7 || 
                    enemy == skel9 || enemy == skel10 || enemy == skel11 || enemy == skel12 || 
                    enemy == skel13 || enemy == skel14 || enemy == skel15 || enemy == knight3 || 
                    enemy == knight4 || enemy == knight5 || enemy == knight6 || enemy == knight7 || 
                    enemy == knight8) {
                        enemyMovex(enemy)
                    }
                if (enemy == skel4 || enemy == skel5 || enemy == skel6 || enemy == skel8 || 
                    enemy == skel9 || enemy == skel12 || enemy == skel13 || enemy == skel14 || 
                    enemy == skel15 || enemy == knight1 || enemy == knight2 || enemy == knight3 || 
                    enemy == knight4 || enemy == knight5 || enemy == knight6 || enemy == knight7 || 
                    enemy == knight8) {
                        enemyMovey(enemy)
                    }

                if (enemy == knight1 && enemy.ydirection) enemy.image = knightRight1
                else if (enemy == knight1 && enemy.ydirection == false) enemy.image = knightLeft1
                if (enemy == knight2 && enemy.ydirection) enemy.image = knightRight2
                else if (enemy == knight2 && enemy.ydirection == false) enemy.image = knightLeft2
                if (enemy == knight3 && enemy.xdirection) enemy.image = knightRight3
                else if (enemy == knight3 && enemy.xdirection == false) enemy.image = knightLeft3
                if (enemy == knight4 && enemy.xdirection) enemy.image = knightRight4
                else if (enemy == knight4 && enemy.xdirection == false) enemy.image = knightLeft4
                if (enemy == knight5 && enemy.xdirection) enemy.image = knightRight5
                else if (enemy == knight5 && enemy.xdirection == false) enemy.image = knightLeft5
                if (enemy == knight6 && enemy.xdirection) enemy.image = knightRight6
                else if (enemy == knight6 && enemy.xdirection == false) enemy.image = knightLeft6
                if (enemy == knight7 && enemy.xdirection) enemy.image = knightRight7
                else if (enemy == knight7 && enemy.xdirection == false) enemy.image = knightLeft7
                if (enemy == knight8 && enemy.xdirection) enemy.image = knightRight8
                else if (enemy == knight8 && enemy.xdirection == false) enemy.image = knightLeft8
                
                damage(enemy)
                triBeamlist.forEach((triBeam, triBeamindex) => {
                    collisionBeam(triBeam, enemy, index, triBeamindex, level4Enemies)
                })
            })
            
            if (dialogueNumber4 == 0) {
                level4Keese.forEach((enemy, keeseIndex) => {
                    keeseMove(enemy)
                    damage(enemy)
                    triBeamlist.forEach((triBeam, triBeamindex) => {
                        collisionBeam(triBeam, enemy, keeseIndex, triBeamindex, level4Keese)
                    })
                })
            }
        }

        level4Dialogue()
        healthTimernumber()
        gameOver()
        portalsCheck()
        fadePortals()
    }
}


function level5() {
    if (level == 5) {
        // Have requestAnimationFrame make a new request after a set Timeout that is equal to 1000 / 60
        setTimeout(() => {
            requestAnimationFrame(level5)
        }, 1000 / fps)

        c.drawImage(map5, 0, 0, 1360, 848)

        if (dialogueFade == 0) bossMusic.play()

        triBeamtimefunc()

        if (triBeamlist.length) {
            triBeamlist.forEach((triBeam) => {
                triBeam.draw(this.c)
                triBeam.toMouse()
            })
        }
        
        Ganon.draw()

        // ganonBeam drawn after Ganon so that it flies over Ganon
        if (ganonBeamlist.length && dialogueNumber6 == 0) {
            ganonBeamlist.forEach((ganonBeam) => {
                ganonBeam.draw(this.c)
                ganonBeam.toZelda()
            })
        }

        tri3.draw()

        zelda.draw()

        if (health == 4) healthBar.image = health4
        else if (health == 3) healthBar.image = health3
        else if (health == 2) healthBar.image = health2
        else if (health == 1) healthBar.image = health1

        healthBar.draw()

        zelda.walking = false

        if (dialogueNumber5 == 0 && dialogueNumber6 == 0) {
            movement5()
            ganonMovex(Ganon)
            ganonMovey(Ganon)
            damage(Ganon)
            ganonBeamlist.forEach((ganonBeam, ganonBeamindex) => {
                zeldaGanonbeam(ganonBeam, zelda, ganonBeamindex)
                damage(ganonBeam)
            })
            triBeamlist.forEach((triBeam, triBeamindex) => {
                collisionBeamganon(triBeam, Ganon, triBeamindex)
            })
        }

        if (dialogueNumber6 == 3 || dialogueNumber6 == 4 || dialogueNumber6 == 5) {
            triBeamlist.forEach((triBeam, triBeamindex) => {
                collisionBeamfinale(triBeam, Ganon, triBeamindex)
            })
        }

        level5Dialogue()
        level6Dialogue()
        healthTimernumber()
        fadeGanon()
        gameOver()
    }
}


function level6() {
    if (level == 6) {
        // Have requestAnimationFrame make a new request after a set Timeout that is equal to 1000 / 60
        setTimeout(() => {
            requestAnimationFrame(level6)
        }, 1000 / fps)

        c.fillStyle = 'black'
        c.fillRect(0, 0, canvas.width, canvas.height)

        endTheme.play()

        // Set zelda.walking to true so that frameCount.val keeps updating so that Zelda looks like she's walking
        zelda.walking = true

        zelda.draw()

        dekuShrub.draw()

        lastDialogue()
    }
}