function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
  
    this._initPlugins();
  }
  
  MediaPlayer.prototype._initPlugins = function() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      mute: () => this.mute(),
      unmute: () => this.unmute(),
      media: this.media,
      
      get paused() {
        return this.media.paused;
      },
      set paused(value) {
        this.media.paused = value;
      },
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      },
    };
  
    this.plugins.forEach(plugin => {
      plugin.run(player);
    });
  };
  
  MediaPlayer.prototype.play = function() {
    this.media.play();
  };
  
  MediaPlayer.prototype.pause = function() {
    this.media.pause();
  };
  
  MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  };
  
  MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
  };
  
  MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
  };
  
  export default MediaPlayer;
  