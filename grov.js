/* dropdown-start */

const dropdown = document.querySelectorAll('.dropdown')
const dropdownContent = document.querySelectorAll('.dropdown-content')

for(let i = 0;i < dropdown.length;i++){
        dropdown[i].onmouseover = function(){
            dropdownContent[i].classList.toggle('show');
            dropdown[i].style.cssText = 'cursor:pointer;'
        }
        dropdown[i].onmouseout = function(){
            dropdownContent[i].classList.toggle('show');
        }
    }

/* dropdown-end */ 

/* video-start */
const video = document.querySelector('#video');
const play = document.querySelector('.btn');
play.addEventListener('click',function(){
    video.play();
    play.style.cssText = 'display:none;'
})

/* video-end */

/* goup-start */

const goup = document.querySelector('.go');
goup.addEventListener('click',function(){
    window.scrollTo(0,0);
})

/* goup-end */

/* burger-start */

const burger = document.querySelector('.burger-mark');
const burgerCont = document.querySelector('.burger-content');

burger.addEventListener('click',function(){
    burgerCont.classList.toggle('burgerOpen');
})

const burgerTexts = document.querySelectorAll('.burger-text');
for(let i = 0;i <= burgerTexts.length;i++){
    burgerTexts[i].addEventListener('click',function(){
        burgerCont.classList.remove('burgerOpen')
    })
}

/* burger-end */

/* header-start */

const header = document.querySelector('.header');
let y = window.scrollY;
if(y > 20){
    burgerCont.classList.remove('burgerOpen')
}
/* header-end */