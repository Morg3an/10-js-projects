function updateClock() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const now = new Date();
    hoursElement.textContent = String(now.getHours()).padStart(2, '0');
    minutesElement.textContent = String(now.getMinutes()).padStart(2, '0');
    secondsElement.textContent = String(now.getSeconds()).padStart(2, '0');
}
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately