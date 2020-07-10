const  container = document.getElementById('container');
const  text = document.getElementById('text');

const totalTime = 16000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5
// console.log(breatheTime, holdTime)
const breathAnimation = () => {
    text.innerText = 'Breathe In';
    container.className = 'container grow';
    setTimeout(() => {
        text.innerText = 'Hold';
        setTimeout(() => {
            text.innerText = 'Breathe Out';
            container.className = 'container shrink';
        }, holdTime)
    }, breatheTime)
}

breathAnimation();
setInterval(breathAnimation, totalTime)




// -------------music
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Play song
const playSong = () => {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

// Pause song
const pauseSong = () => {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

// Update Progress
const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100;
    // console.log(progressPercent);
    progress.style.width = `${progressPercent}%`
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }


// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong()
    } else {
        playSong();
    }
});

// Time/song update
audio.addEventListener('timeupdate', updateProgress)

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// volume slider
window.SetVolume = function(val) {
    audio.volume = val/100;
}