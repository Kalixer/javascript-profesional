class KeyCommand {
    constructor() {
        this.clickKey = this.clickKey.bind(this)
    }
    run(player) {
      this.player = player;

        const keys = {
            PAUSE: 75,
            MUTE: 77,
        }
        document.addEventListener("keydown", this.clickKey);

    }
    
    clickKey(key) {
        switch(key.keyCode)
        {
            case 75:
                if (this.player.paused) {
                    this.player.play();
                  } else {
                    this.player.pause();
                  }
            break;
            case 77:
                if (!this.player.muted) {
                    this.player.mute();
                } else {
                    this.player.unmute();
                }
            break;
        }
    }
}

export default KeyCommand;