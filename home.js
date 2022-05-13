const THEME_BTN = document.querySelector('.theme--btn');
const TOGGLE = document.querySelector('.toggle');
const BODY = document.body;
const CLOCK_BTN = document.querySelector('.clock--btn');
const HOUR_HAND = document.querySelector('.hour');
const MINUTE_HAND = document.querySelector('.minute');
const SECONDS_HAND = document.querySelector('.seconds');
const DAY = document.querySelector('.day');
const MONTH = document.querySelector('.month');
const DATE = document.querySelector('.date');
const YEAR = document.querySelector('.year');

THEME_BTN.addEventListener('click', ()=>{
    TOGGLE.classList.toggle('current');
    BODY.classList.toggle('dark');
})

CLOCK_BTN.addEventListener('click', ()=>{
    CLOCK_BTN.children[0].classList.toggle('current--clock');
    CLOCK_BTN.children[1].classList.toggle('current--clock');
})

function setTime(){
    let seconds = new Date().getSeconds() / 60;
    let minutes = new Date().getMinutes() / 60;
    let hour = new Date().getHours() / 12;

    HOUR_HAND.style.transform = `rotate(${hour * 360}deg)`;
    MINUTE_HAND.style.transform = `rotate(${minutes * 360}deg)`;
    SECONDS_HAND.style.transform = `rotate(${seconds * 360}deg)`;
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

    DAY.innerText = days[new Date().getDay()];
    MONTH.innerText = months[new Date().getMonth()];
    DATE.innerText = new Date().getDate();
    YEAR.innerText = new Date().getFullYear();
}
setDate();
