// DIALOGUE
const dialogueBox = new Dialogues({
    position: {
        x: 281,
        y: 575
    },
    image: dialogue1Image
})

const endingDialogue = new Dialogues({
    position: {
        x: 281,
        y: 175
    },
    image: dialogue71Image
})

function boxDialogue(image) {
    dialogueBox.image = image
    dialogueBox.draw()
}

function endDialogue(image) {
    endingDialogue.image = image
    endingDialogue.draw()
}

/*
Draws the dialogue box on canvasDial
Pressing the f key sends you to the next dialogue box
There is a built-in very short timer 
So that one f press doesn't send you through multiple dialogue boxes
dialogueNumber's default is -1
After finishing the dialogue dialogueNumber is set to 0
This activates multiple functions to allow for gameplay
*/
function level1Dialogue() {
    if (dialogueNumber > 0) {
        if (dialogueNumber == 1) {
            boxDialogue(dialogue1Image)
        }
        if (dialogueNumber == 1 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue2Image)
            walk(0, 0, zeldaLeft)
            dootSound.play()
            dialogueNumber = 2
            dialogueTimer = 1
        }
        if (dialogueNumber == 2 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue3Image)
            dootSound.play()
            dialogueNumber = 3
            dialogueTimer = 1
        }
        if (dialogueNumber == 3 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue4Image)
            dootSound.play()
            dialogueNumber = 4
            dialogueTimer = 1
        }
        if (dialogueNumber == 4 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue5Image)
            dootSound.play()
            dialogueNumber = 5
            dialogueTimer = 1
        }
        if (dialogueNumber == 5 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue6Image)
            dootSound.play()
            dialogueNumber = 6
            dialogueTimer = 1
        }
        if (dialogueNumber == 6 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue7Image)
            dootSound.play()
            dialogueNumber = 7
            dialogueTimer = 1
        }
        if (dialogueNumber == 7 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue8Image)
            dootSound.play()
            dialogueNumber = 8
            dialogueTimer = 1
        }
        if (dialogueNumber == 8 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue9Image)
            dootSound.play()
            dialogueNumber = 9
            dialogueTimer = 1
        }
        if (dialogueNumber == 9 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue10Image)
            dootSound.play()
            dialogueNumber = 10
            dialogueTimer = 1
        }
        if (dialogueNumber == 10 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue11Image)
            dootSound.play()
            dialogueNumber = 11
            dialogueTimer = 1
        }
        if (dialogueNumber == 11 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue12Image)
            dootSound.play()
            dialogueNumber = 12
            dialogueTimer = 1
        }
        if (dialogueNumber == 12 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue13Image)
            dootSound.play()
            dialogueNumber = 13
            dialogueTimer = 1
        }
        if (dialogueNumber == 13 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue14Image)
            dootSound.play()
            dialogueNumber = 14
            dialogueTimer = 1
        }
        if (dialogueNumber == 14 && dialogueTimer == 0 && keys.f == true) {
            boxDialogue(dialogue15Image)
            dootSound.play()
            dialogueNumber = 15
            dialogueTimer = 1
        }
        if (dialogueNumber == 15 && dialogueTimer == 0 && keys.f == true) {
            walk(0, 0, zeldaDown)
            boxDialogue(dialogue16Image)
            dootSound.play()
            dialogueNumber = 16
            dialogueTimer = 1
        }
        if (dialogueNumber == 16 && dialogueTimer == 0 && keys.f == true) {
            cd.clearRect(0, 0, canvas.width, canvas.height)
            dootSound.play()
            dialogueNumber = 0
            dialogueTimer = 1
        }

        // Short timer
        if (dialogueTimer > 0 && dialogueTimer < 9) dialogueTimer += 1
        else if (dialogueTimer > 8) dialogueTimer = 0
    }
}


function level2Dialogue() {
    if (dialogueNumber2 > 0) {
        if (dialogueNumber2 == 1) {
            boxDialogue(dialogue21Image)
        }
        if (dialogueNumber2 == 1 && dialogueTimer2 == 0 && keys.f == true) {
            boxDialogue(dialogue22Image)
            walk(0, 0, zeldaLeft)
            dootSound.play()
            dialogueNumber2 = 2
            dialogueTimer2 = 1
        }
        if (dialogueNumber2 == 2 && dialogueTimer2 == 0 && keys.f == true) {
            boxDialogue(dialogue23Image)
            dootSound.play()
            dialogueNumber2 = 3
            dialogueTimer2 = 1
        }
        if (dialogueNumber2 == 3 && dialogueTimer2 == 0 && keys.f == true) {
            boxDialogue(dialogue24Image)
            dootSound.play()
            dialogueNumber2 = 4
            dialogueTimer2 = 1
        }
        if (dialogueNumber2 == 4 && dialogueTimer2 == 0 && keys.f == true) {
            boxDialogue(dialogue25Image)
            dootSound.play()
            dialogueNumber2 = 5
            dialogueTimer2 = 1
        }
        if (dialogueNumber2 == 5 && dialogueTimer2 == 0 && keys.f == true) {
            boxDialogue(dialogue26Image)
            dootSound.play()
            dialogueNumber2 = 6
            dialogueTimer2 = 1
        }
        if (dialogueNumber2 == 6 && dialogueTimer2 == 0 && keys.f == true) {
            boxDialogue(dialogue27Image)
            dootSound.play()
            dialogueNumber2 = 7
            dialogueTimer2 = 1
        }
        if (dialogueNumber2 == 7 && dialogueTimer2 == 0 && keys.f == true) {
            boxDialogue(dialogue28Image)
            dootSound.play()
            dialogueNumber2 = 8
            dialogueTimer2 = 1
        }
        if (dialogueNumber2 == 8 && dialogueTimer2 == 0 && keys.f == true) {
            boxDialogue(dialogue29Image)
            dootSound.play()
            dialogueNumber2 = 9
            dialogueTimer2 = 1
        }
        if (dialogueNumber2 == 9 && dialogueTimer2 == 0 && keys.f == true) {
            boxDialogue(dialogue210Image)
            walk(0, 0, zeldaDown)
            dootSound.play()
            dialogueNumber2 = 10
            dialogueTimer2 = 1
        }
        if (dialogueNumber2 == 10 && dialogueTimer2 == 0 && keys.f == true) {
            cd.clearRect(0, 0, canvas.width, canvas.height)
            dootSound.play()
            dialogueNumber2 = 0
            dialogueTimer2 = 1
            tri1.position = {
                x: -120,
                y: -130
            }

        }


        if (dialogueTimer2 > 0 && dialogueTimer2 < 9) dialogueTimer2 += 1
        else if (dialogueTimer2 > 8) dialogueTimer2 = 0
    }
}


function level3Dialogue() {
    if (dialogueNumber3 > 0) {
        if (dialogueNumber3 == 1) {
            boxDialogue(dialogue31Image)
        }
        if (dialogueNumber3 == 1 && dialogueTimer3 == 0 && keys.f == true) {
            boxDialogue(dialogue32Image)
            walk(0, 0, zeldaLeft)
            dootSound.play()
            dialogueNumber3 = 2
            dialogueTimer3 = 1
        }
        if (dialogueNumber3 == 2 && dialogueTimer3 == 0 && keys.f == true) {
            boxDialogue(dialogue33Image)
            dootSound.play()
            dialogueNumber3 = 3
            dialogueTimer3 = 1
        }
        if (dialogueNumber3 == 3 && dialogueTimer3 == 0 && keys.f == true) {
            boxDialogue(dialogue34Image)
            dootSound.play()
            dialogueNumber3 = 4
            dialogueTimer3 = 1
        }
        if (dialogueNumber3 == 4 && dialogueTimer3 == 0 && keys.f == true) {
            boxDialogue(dialogue35Image)
            dootSound.play()
            dialogueNumber3 = 5
            dialogueTimer3 = 1
        }
        if (dialogueNumber3 == 5 && dialogueTimer3 == 0 && keys.f == true) {
            boxDialogue(dialogue36Image)
            dootSound.play()
            dialogueNumber3 = 6
            dialogueTimer3 = 1
        }
        if (dialogueNumber3 == 6 && dialogueTimer3 == 0 && keys.f == true) {
            boxDialogue(dialogue37Image)
            dootSound.play()
            dialogueNumber3 = 7
            dialogueTimer3 = 1
        }
        if (dialogueNumber3 == 7 && dialogueTimer3 == 0 && keys.f == true) {
            boxDialogue(dialogue38Image)
            dootSound.play()
            dialogueNumber3 = 8
            dialogueTimer3 = 1
        }
        if (dialogueNumber3 == 8 && dialogueTimer3 == 0 && keys.f == true) {
            boxDialogue(dialogue39Image)
            dootSound.play()
            dialogueNumber3 = 9
            dialogueTimer3 = 1
        }
        if (dialogueNumber3 == 9 && dialogueTimer3 == 0 && keys.f == true) {
            boxDialogue(dialogue310Image)
            dootSound.play()
            dialogueNumber3 = 10
            dialogueTimer3 = 1
        }
        if (dialogueNumber3 == 10 && dialogueTimer3 == 0 && keys.f == true) {
            boxDialogue(dialogue311Image)
            walk(0, 0, zeldaDown)
            dootSound.play()
            dialogueNumber3 = 11
            dialogueTimer3 = 1
        }
        if (dialogueNumber3 == 11 && dialogueTimer3 == 0 && keys.f == true) {
            cd.clearRect(0, 0, canvas.width, canvas.height)
            dootSound.play()
            dialogueNumber3 = 0
            dialogueTimer3 = 1
            tri2.position = {
                x: -120,
                y: -130
            }
        }


        if (dialogueTimer3 > 0 && dialogueTimer3 < 9) dialogueTimer3 += 1
        else if (dialogueTimer3 > 8) dialogueTimer3 = 0
    }
}



function level4Dialogue() {
    if (dialogueNumber4 > 0) {
        if (dialogueNumber4 == 1) {
            boxDialogue(dialogue41Image)
        }
        if (dialogueNumber4 == 1 && dialogueTimer4 == 0 && keys.f == true) {
            boxDialogue(dialogue42Image)
            walk(0, 0, zeldaLeft)
            dootSound.play()
            dialogueNumber4 = 2
            dialogueTimer4 = 1
        }
        if (dialogueNumber4 == 2 && dialogueTimer4 == 0 && keys.f == true) {
            boxDialogue(dialogue43Image)
            dootSound.play()
            dialogueNumber4 = 3
            dialogueTimer4 = 1
        }
        if (dialogueNumber4 == 3 && dialogueTimer4 == 0 && keys.f == true) {
            boxDialogue(dialogue44Image)
            dootSound.play()
            dialogueNumber4 = 4
            dialogueTimer4 = 1
        }
        if (dialogueNumber4 == 4 && dialogueTimer4 == 0 && keys.f == true) {
            boxDialogue(dialogue45Image)
            dootSound.play()
            dialogueNumber4 = 5
            dialogueTimer4 = 1
        }
        if (dialogueNumber4 == 5 && dialogueTimer4 == 0 && keys.f == true) {
            boxDialogue(dialogue46Image)
            dootSound.play()
            dialogueNumber4 = 6
            dialogueTimer4 = 1
        }
        if (dialogueNumber4 == 6 && dialogueTimer4 == 0 && keys.f == true) {
            boxDialogue(dialogue47Image)
            dootSound.play()
            dialogueNumber4 = 7
            dialogueTimer4 = 1
        }
        if (dialogueNumber4 == 7 && dialogueTimer4 == 0 && keys.f == true) {
            boxDialogue(dialogue48Image)
            walk(0, 0, zeldaDown)
            dootSound.play()
            dialogueNumber4 = 8
            dialogueTimer4 = 1
        }
        if (dialogueNumber4 == 8 && dialogueTimer4 == 0 && keys.f == true) {
            cd.clearRect(0, 0, canvas.width, canvas.height)
            dootSound.play()
            dialogueNumber4 = 0
            dialogueTimer4 = 1
            tri3.position = {
                x: -120,
                y: -130
            }
        }


        if (dialogueTimer4 > 0 && dialogueTimer4 < 9) dialogueTimer4 += 1
        else if (dialogueTimer4 > 8) dialogueTimer4 = 0
    }
}


function level5Dialogue() {
    if (dialogueNumber5 > 0) {
        if (dialogueNumber5 == 1) {
            boxDialogue(dialogue51Image)
        }
        if (dialogueNumber5 == 1 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue52Image)
            walk(0, 0, zeldaUp)
            dootSound.play()
            dialogueNumber5 = 2
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 2 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue53Image)
            Ganon.image = GanonHigh
            dootSound.play()
            dialogueNumber5 = 3
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 3 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue54Image)
            dootSound.play()
            dialogueNumber5 = 4
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 4 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue55Image)
            dootSound.play()
            dialogueNumber5 = 5
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 5 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue56Image)
            Ganon.image = GanonCloak
            dootSound.play()
            dialogueNumber5 = 6
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 6 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue57Image)
            dootSound.play()
            dialogueNumber5 = 7
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 7 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue58Image)
            dootSound.play()
            dialogueNumber5 = 8
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 8 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue59Image)
            dootSound.play()
            dialogueNumber5 = 9
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 9 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue510Image)
            dootSound.play()
            dialogueNumber5 = 10
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 10 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue511Image)
            dootSound.play()
            dialogueNumber5 = 11
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 11 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue512Image)
            Ganon.image = GanonLow
            dootSound.play()
            dialogueNumber5 = 12
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 12 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue513Image)
            Ganon.image = GanonArm
            dootSound.play()
            dialogueNumber5 = 13
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 13 && dialogueTimer5 == 0 && keys.f == true) {
            boxDialogue(dialogue514Image)
            dootSound.play()
            dialogueNumber5 = 14
            dialogueTimer5 = 1
        }
        if (dialogueNumber5 == 14 && dialogueTimer5 == 0 && keys.f == true) {
            cd.clearRect(0, 0, canvas.width, canvas.height)
            dootSound.play()
            ganonshooton = true
            dialogueNumber5 = 0
            dialogueTimer5 = 1
            ganonShoot()
        }


        if (dialogueTimer5 > 0 && dialogueTimer5 < 9) dialogueTimer5 += 1
        else if (dialogueTimer5 > 8) dialogueTimer5 = 0
    }
}


function level6Dialogue() {
    if (dialogueNumber6 > 0) {
        if (dialogueNumber6 == 1) {
            boxDialogue(dialogue61Image)
            walk(0, 0, zeldaDown)
        }
        if (dialogueNumber6 == 1 && dialogueTimer6 == 0 && keys.f == true) {
            boxDialogue(dialogue62Image)
            dootSound.play()
            dialogueNumber6 = 2
            dialogueTimer6 = 1
        }
        if (dialogueNumber6 == 2 && dialogueTimer6 == 0 && keys.f == true) {
            boxDialogue(dialogue63Image)
            dootSound.play()
            dialogueNumber6 = 3
            dialogueTimer6 = 1
        }
        if (dialogueNumber6 == 3 && dialogueTimer6 == 0 && keys.f == true) {
            boxDialogue(dialogue64Image)
            zelda.cols = 1
            zelda.frameCount.val = 0
            zelda.image = zeldaTri
            tri3.position.x = zelda.position.x - 4
            tri3.position.y = zelda.position.y - 28
            finaleBeam()
            dootSound.play()
            dialogueNumber6 = 4
            dialogueTimer6 = 1
        }
        if (dialogueNumber6 == 4 && dialogueTimer6 == 0 && keys.f == true) {
            boxDialogue(dialogue65Image)
            finaleBeam()
            dootSound.play()
            dialogueNumber6 = 5
            dialogueFade = 1
            dialogueTimer6 = 1
        }


        if (dialogueTimer6 > 0 && dialogueTimer6 < 9) dialogueTimer6 += 1
        else if (dialogueTimer6 > 8) dialogueTimer6 = 0
    }
}


function lastDialogue() {
    endTimer += 1

    if (endTimer > 0 && endTimer < 39) {
        j = .005
        alphaFadecd()
    }
    else if (endTimer > 40 && endTimer < 240) {
        alphaUnfadecd()
        endDialogue(dialogue71Image)
    }
    else if (endTimer > 239 && endTimer < 300) {
        cd.clearRect(0, 0, canvasDial.width, canvasDial.height)
        endDialogue(dialogue71Image)
    }
    else if (endTimer > 299 && endTimer < 500) {
        alphaFadecd()
        endDialogue(dialogue71Image)
    }
    else if (endTimer > 499 && endTimer < 580) {
        alphaUnfadecd()
        endDialogue(dialogue72Image)
    }
    else if (endTimer > 579 && endTimer < 860) {
        alphaUnfadecd()
        endDialogue(dialogue72Image)
        alphaFade()
    }
    else if (endTimer > 859) {
        alphaUnfadecd()
        endDialogue(dialogue72Image)
        cd.drawImage(xRestart, 435, 530, 526, 84)
        alphaFade()

        // Fully resets variables for another playthrough
        if (keys.x || keys.X) {
            endTheme.pause()
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
            triBeamlist = []
            ganonBeamlist = []
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