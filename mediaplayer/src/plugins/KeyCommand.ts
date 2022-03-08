import MediaPlayer from "../MediaPlayer";

class KeyCommand {
    player: MediaPlayer;

    constructor() {}
    run(player) {

        const keys = {
            PLAY: 75,
            MUTE: 77,
        }

        document.addEventListener("keydown", clickKey);

        function clickKey(key) {
            switch(key.keyCode) {
                case keys.PLAY:
                    if(player.media.paused) {
                        player.play()
                    } else {
                        player.pause()
                    }
                break;
                case keys.MUTE:
                    if(player.media.muted) {
                        player.unmute()
                    } else {
                        player.mute()
                    }
                break;
            }
        }
    }
}

export default KeyCommand;


