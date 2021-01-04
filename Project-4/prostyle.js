const search = document.querySelector(".container");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const detail = document.querySelector('.detail')

btn.addEventListener("click", function () {
    search.classList.toggle("active");
    input.focus()
    // detail.style.display = block;
    detail.classList.toggle('active')
});
