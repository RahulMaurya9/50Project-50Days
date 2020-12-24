const progress = document.querySelector(".progress");

const button = document.querySelector(".btn");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");
let currentActive = 1;
let circle_selector = 1
circle[0].style.backgroundColor = "rgb(129, 206, 241)";
circle[0].style.color = "white";

next.addEventListener("click", function () {
    currentActive++;
    if (currentActive > circle.length) {
        currentActive = circle.length;
    }
    update();
});
prev.addEventListener("click", function () {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

function update() {
    circle.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
    const actives = document.querySelectorAll(".active");
    let perc = ((actives.length - 1) / (circle.length - 1)) * 100 + "%";
    progress.style.width = perc;
    if (currentActive == 1) {
        prev.disabled = false;
    } else if (currentActive == circle.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
    for(let i = 0 ;i<actives.length; i++){
        if(currentActive>i){
            circle[i].style.backgroundColor='rgb(129, 206, 241)';
            circle[i].style.color = 'white';
            console.log(i);
        }else{
            circle[i].style.backgroundColor = 'white'
            console.log(i);
        }
    }
}
