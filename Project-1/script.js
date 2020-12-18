'use strict'

const pickElement = document.querySelectorAll(".panel")
pickElement.forEach((panel)=>{
    panel.addEventListener('click',function(){
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    pickElement.forEach(panel =>{
        panel.classList.remove('active')
    })
}