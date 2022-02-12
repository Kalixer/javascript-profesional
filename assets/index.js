import MediaPlayer from './MediaPlayer.js';
import Autoplay from './plugins/Autoplay'

const video = document.querySelector('video');
const button = document.querySelector('button');


const player = new MediaPlayer({ el: video, plugins: [] });
      
let notplaying = true;
button.onclick = () => { player.toggleplay() }