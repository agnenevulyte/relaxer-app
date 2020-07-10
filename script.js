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