const containerDigital = document.querySelector('.container-digital');
const containerAnalog = document.querySelector('.container-analog');
const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');
const input = document.querySelector('#range');
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');


function getTime() {
    const date = new Date();
    hours.innerText = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours();
    mins.innerText = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes();
    secs.innerText = date.getSeconds().toString().length === 1 ? '0' + date.getSeconds() : date.getSeconds();
}

function setAnalogClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setInterval(() => getTime(), 1000)

input.addEventListener('change', () => {
    isDigital = input.value === '1'
    if (isDigital) {
        containerDigital.classList.remove('hidden');
        containerAnalog.classList.add('hidden');
        console.log('yeah')
        setInterval(() => getTime(), 1000)

    } else {
        containerDigital.classList.add('hidden');
        containerAnalog.classList.remove('hidden');
        setInterval(() => setAnalogClock(), 1000)
    }
})