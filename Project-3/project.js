
const open  = document.getElementById('open')
const close  = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListner('click', ()=> container.classList.add('rotate-cont'))
close.addEventListner('click', ()=> container.classList.remove('rotate-cont'))