function AutoPlay() {}
AutoPlay.prototype.run = function(player) {
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};

export default AutoPlay;

// Don't know why but the mute() function doesn't work :|