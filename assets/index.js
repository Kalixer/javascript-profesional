import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const button_play = document.querySelector('button');
const button_mute = document.getElementById("b_mute")


const player = new MediaPlayer({ 
  el: video, plugins: [new AutoPlay],
});

button_play.onclick = () => { player.toggleplay() }
button_mute.onclick = () => { player.unmute() }
