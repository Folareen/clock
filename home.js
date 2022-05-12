const THEME_BTN = document.querySelector('.theme--btn');
const TOGGLE = document.querySelector('.toggle');
const BODY = document.body;
const CLOCK_BTN = document.querySelector('.clock--btn');

THEME_BTN.addEventListener('click', ()=>{
    TOGGLE.classList.toggle('current');
    // THEME_BTN.classList.toggle('bg');
    BODY.classList.toggle('dark');
})

CLOCK_BTN.addEventListener('click', ()=>{
    CLOCK_BTN.children[0].classList.toggle('current--clock');
    CLOCK_BTN.children[1].classList.toggle('current--clock');
    // console.log(CLOCK_BTN.children[0])
})