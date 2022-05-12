const THEME_BTN = document.querySelector('.theme--btn');
const TOGGLE = document.querySelector('.toggle');
const BODY = document.body;

THEME_BTN.addEventListener('click', ()=>{
    TOGGLE.classList.toggle('current');
    THEME_BTN.classList.toggle('bg');
    BODY.classList.toggle('body-bg')
})