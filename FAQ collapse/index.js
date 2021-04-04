const toggles = document.querySelectorAll('.faq-toggle')


toggles.forEach((ele)=>{
  ele.addEventListener('click' , ()=>{
    ele.parentNode.classList.toggle('active')
  })
})