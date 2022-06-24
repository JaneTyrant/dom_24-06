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

const ul = document.getElementsByTagName('ul')[0];
// const ul = document.querySelector('h1+nav>ul');
const li = document.querySelector('li:nth-child(4)');
const h2 = document.getElementsByTagName('h2');
// const h2 = document.querySelector('h2');
const img = document.querySelector('img[alt=sea]');
const p = document.querySelector('img[alt=sea]+.text');
