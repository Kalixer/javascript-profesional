import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const button = document.querySelector('button');


const player = new MediaPlayer({ el: video });
      
let notplaying = true;
button.onclick = () => { player.toggleplay()
        
    // function playVideo() {
    //     if (notplaying){
    //         player.play();
    //         notplaying = false;
    //     } else {
    //         player.pause();
    //         notplaying = true;
    //       }
    //     }
    //     playVideo()
      }