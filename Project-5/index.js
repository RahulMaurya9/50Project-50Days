"use strict";

const loader = document.querySelector(".loader");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(counter, 20);

function counter() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loader.innerText = `${load}%`;
    loader.style.opacity = scale(load,0,100,1,0)
    bg.style.filter =`blur(${scale(load,0,100,40,0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
