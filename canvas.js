class CanvasGame {
    start() {    
        this.toggleScreen('start', false)
        this.toggleScreen('game-layer', true)
        this.toggleScreen('dialogue-layer', true)
        level = -1
        if (level == -1) {
            openingFade()
            openingScreen()
        }
    }

    toggleScreen(id, toggle) {
        let element = document.getElementById(id)
        let display = ( toggle ) ? 'block' : 'none'
        element.style.display = display
    }
}