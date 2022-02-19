function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
        },
    };
    
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
};

MediaPlayer.prototype.play = function() {
   this.media.play()
}

MediaPlayer.prototype.pause = function() {
   this.media.pause()
}
MediaPlayer.prototype.toggleplay = function() {
    if(this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function() {
    if(this.media.muted) {
        this.media.muted = false;
    } else {
        this.media.muted = true;
    }
}


export default MediaPlayer;