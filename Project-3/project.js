
const open  = document.getElementsByClassName('open')
const close  = document.getElementsByClassName('close')
const container = document.querySelector('.container')

open.addEventListner('click', ()=> container.classList.add('rotate-cont'))
close.addEventListner('click', ()=> container.classList.remove('rotate-cont'))