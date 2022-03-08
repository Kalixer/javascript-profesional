import MediaPlayer from '@kalixer/platzimediaplayer/lib/MediaPlayer';
import AutoPlay from '@kalixer/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@kalixer/platzimediaplayer/lib/plugins/AutoPause';
import KeyCommand from '@kalixer/platzimediaplayer/lib/plugins/KeyCommand';
import Ads from '@kalixer/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new KeyCommand(), new Ads()],
});

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}