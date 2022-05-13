const THEME_BTN = document.querySelector('.theme--btn');
const TOGGLE = document.querySelector('.toggle');
const BODY = document.body;
const CLOCK_BTN = document.querySelector('.clock--btn');
const HOUR_HAND = document.querySelector('.hour');
const MINUTE_HAND = document.querySelector('.minute');
const SECONDS_HAND = document.querySelector('.seconds');

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
        setTime()
    }, 1000
)

setTime();