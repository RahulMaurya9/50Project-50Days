'use strict'

const box = document.querySelectorAll('.box')

window.addEventListener('scroll',boxShow)

function boxShow(){
    const trigger = window.innerHeight/5*4;
    console.log(trigger);
    box.forEach(box=>{
        const topBox = box.getBoundingClientRect().top;
        if(topBox<trigger){
            box.classList.add('show')

        }else{
            box.classList.remove('show')
        }
    })
}