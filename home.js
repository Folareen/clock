const THEME_BTN = document.querySelector('.theme--btn');
const TOGGLE = document.querySelector('.toggle');
const BODY = document.body;
const CLOCK_BTN = document.querySelector('.clock--btn');
const CLOCK = document.querySelector('.clock')
const HOUR_HAND = document.querySelector('.hour');
const MINUTE_HAND = document.querySelector('.minute');
const SECONDS_HAND = document.querySelector('.seconds');
const DAY = document.querySelectorAll('.day');
const MONTH = document.querySelectorAll('.month');
const DATE = document.querySelectorAll('.date');
const YEAR = document.querySelectorAll('.year');
const DIGITAL_HOUR = document.querySelector('.digital__clock__hour');
const DIGITAL_MINUTE = document.querySelector('.digital__clock__minutes');
const DIGITAL_SECOND = document.querySelector('.digital__clock__seconds');
const DIGITAL_MERIDIAN = document.querySelector('.digital__clock__meridian');

THEME_BTN.addEventListener('click', ()=>{
    TOGGLE.classList.toggle('current');
    BODY.classList.toggle('dark');
})

CLOCK_BTN.addEventListener('click', ()=>{
    CLOCK_BTN.children[0].classList.toggle('current--clock');
    CLOCK_BTN.children[1].classList.toggle('current--clock');
    CLOCK.classList.toggle('move--clock');

})

function setTime(){
    // ANALOGUE
    let seconds = new Date().getSeconds() / 60;
    let minutes = new Date().getMinutes() / 60;
    let hour = new Date().getHours() / 12;

    HOUR_HAND.style.transform = `rotateZ(${hour * 360}deg)`;
    MINUTE_HAND.style.transform = `rotateZ(${minutes * 360}deg)`;
    SECONDS_HAND.style.transform = `rotateZ(${seconds * 360}deg)`;

    // DIGITAL
    DIGITAL_HOUR.innerText = (new Date().getHours() > 10) ? `0${new Date().getHours() - 12}:` : `${new Date().getHours()}`;

    DIGITAL_MINUTE.innerText = (new Date().getSeconds() > 10) ? `${new Date().getMinutes()}:` : `0${new Date().getMinutes()}`;

    DIGITAL_SECOND.innerText = (new Date().getSeconds() > 10) ? new Date().getSeconds() : `0${new Date().getSeconds()}`;

    DIGITAL_MERIDIAN.innerText = `${" "} ${(hour * 12) < 12 ? "AM" : "PM"}`;
}

setInterval(
    ()=>{
        setTime();
        setDate();
    }, 1000
)
setTime();

function setDate(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    DAY.forEach(
        (day)=>{
            day.innerText = days[new Date().getDay()];
        }
    );

    MONTH.forEach(
        (month)=>{
            month.innerText = months[new Date().getMonth()];
        }
    );

    DATE.forEach(
        (date)=>{
            date.innerText = new Date().getDate();
        }
    );

    YEAR.forEach(
        (year)=>{
            year.innerText = new Date().getFullYear();
        }
    );
}
setDate();