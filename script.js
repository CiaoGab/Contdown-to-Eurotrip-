function countdown() {
    const now = new Date();
    const targetDate = new Date('September 23, 2025');
    const timeDiff = targetDate - now;

    const totalSeconds = timeDiff / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('mins');
    const secondsEl = document.getElementById('seconds');

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(minutes, seconds)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);