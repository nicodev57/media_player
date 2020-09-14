import mediaPlayer from './mediaPlayer'

const video = document.querySelector("video");
const button = document.getElementById("playButton");

const player = new mediaPlayer({ el: video });
button.onclick = () => player.togglePlay();

