setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}



function setRotation(element, rotationRatio) {
    element.style.setProperty(`--rotation`, rotationRatio * 360)
}

setClock()




let digitHour = document.querySelector(".digit-hour"),
    digitMin = document.querySelector(".digit-min"),
    digitSec = document.querySelector(".digit-second"),
    digitGm = document.querySelector(".digit-gmt");

let h;
let m;
let s;

function setDigitTime() {
    const date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    if (h == 13) {
        h = 0;
    }
    if (h > 12) {
        digitGm.textContent = "PM";
    }
    else {
        digitGm.textContent = "AM";
    }

    digitHour.textContent = h < 10 ? "0" + h : h;
    digitMin.textContent = m < 10 ? "0" + m : m;
    digitSec.textContent = s < 10 ? "0" + s : s;

    setInterval(setDigitTime, 1000)
}
setDigitTime()