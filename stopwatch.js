let seconds = 0;
let minutes = 0;
let hours = 0;
let display = document.getElementById('display');
let interval;

function updateTime() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startStopwatch() {
    clearInterval(interval);
    interval = setInterval(updateTime, 1000);
}

function stopStopwatch() {
    clearInterval(interval);
}

function resetStopwatch() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
}
