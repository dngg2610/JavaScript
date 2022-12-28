class ui {
    constructor() {

    }

    showScreen(screenName) {
        let screens = document.querySelectorAll('#wrapper > div')
        screens.forEach((screen)=> {
            screen.style.display = 'none'
        })
        let currentScreen = document.getElementById(screenName);
        currentScreen.style.display = 'block';
    }

    onStartBtnClick(tiep) {
        let startBtn = document.getElementById('startBtn')
        startBtn.addEventListener('click', tiep)
    }

}