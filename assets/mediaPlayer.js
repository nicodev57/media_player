function mediaPlayer(config) {
    this.media = config.el;
};

mediaPlayer.prototype.play = function() { // cuando se trabaja con clases debemos agregar los metodos al prototype
    this.media.play();
};

mediaPlayer.prototype.pause = function() { // cuando se trabaja con clases debemos agregar los metodos al prototype
    this.media.pause();
};

mediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

export default mediaPlayer;