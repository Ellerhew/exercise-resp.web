const menuBar = document.querySelector(".menubar");
const menu = document.querySelector(".menu");
const link= document.querySelector(".link");

function active() {
    menu.classList.toggle('active');
    link.classList.toggle('active');
}

menuBar.addEventListener('click', active);