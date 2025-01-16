const minutos = document.querySelector('#minutes')
const segundos = document.querySelector('#segundos')
const milisegundos = document.querySelector('#milesegundo')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const reseteBtn = document.querySelector('#resetBtn')
const resumeBtn = document.querySelector('#resumeBtn')

let intervalo;
let minutos2 = 0;
let segundos2 = 0;
let milisegundos2 = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resumeBtn.addEventListener("click", resumeTimer)
reseteBtn.addEventListener("click", resstTimer)

function startTimer() {
    intervalo = setInterval(() => {
        if (!isPaused) {
            milisegundos2 += 10;

            if (milisegundos2 === 1000) {
                segundos2++;
                milisegundos2 = 0;
            }
            if (segundos2 === 60) {
                minutos2++;
                segundos2 = 0;
            }
            minutos.textContent = formatTime(minutos2);
            segundos.textContent = formatTime(segundos2);
            milisegundos.textContent = formatMilisegundos(milisegundos2);
        }
    }, 10);

    startBtn.style.display ="none";
    pauseBtn.style.display ="block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
}

function resstTimer() {
    clearInterval(intervalo)
    minutos2 = 0;
    segundos2 = 0;
    milisegundos2 = 0;

    minutos.textContent = "00"
    segundos.textContent = "00"
    milisegundos.textContent = "000"

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
function formatMilisegundos(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}