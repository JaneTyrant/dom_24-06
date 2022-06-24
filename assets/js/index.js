"use strict";

/*
console.log(window.document);
// console.log(window.document.body);
console.log(document.body);
console.dir(window.document);

console.log(document.children);
*/

function btnHandler() {
    console.log('Button is clicked');
}

// const [btn] = document.getElementsByTagName('button');
// console.log(btn);

// const btn = document.getElementById('btn');

//const btn = document.querySelector('.btn + .btn');

const btns1 = document.getElementsByClassName('btn');
const btns2 = document.querySelectorAll('.btn');

//btn.addEventListener('click', btnHandler);