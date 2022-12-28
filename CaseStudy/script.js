
class altp {
    constructor(){
        this.ui = new ui();
        this.ui.showScreen('welcomeScreen');

        this.ui.onStartBtnClick( () => {
            this.start();
        });

    }

    start() {
        this.ui.showScreen('questionScreen');
    }
}

var game = new altp();