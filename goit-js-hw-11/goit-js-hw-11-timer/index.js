class CountdownTimer {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    getTime() {
        const startDate = Date.now();
        this.timerId = setInterval(() => {
            const currentDate = Date.now(); ///Дата в реальном времени
            const targetDate = Date.parse(this.targetDate);
            const deltaTime = targetDate - currentDate;

            updateClockface(deltaTime);
        }, 1000);
    }
};

const timer1 = new CountdownTimer('#timer-1', 'July 17, 2021');
timer1.getTime();

const daysValue = document.querySelector('.value[data-value="days"]');
const hoursValue = document.querySelector('.value[data-value="hours"]');
const minsValue = document.querySelector('.value[data-value="mins"]');
const secsValue = document.querySelector('.value[data-value="secs"]');

function updateClockface(time) {

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    daysValue.textContent = `${days}`;
    hoursValue.textContent = `${hours}`;
    minsValue.textContent = `${mins}`;
    secsValue.textContent = `${secs}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}