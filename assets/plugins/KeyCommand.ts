import MediaPlayer from "../MediaPlayer";

class KeyCommand {
    player: MediaPlayer;

    constructor() {}
    run(player) {
        this.player = player;

        document.addEventListener("keydown", this.player.unmute);
        
        
    }
}

export default KeyCommand;


