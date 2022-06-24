"use strict";

const imagesDB = [
  "https://upload.wikimedia.org/wikipedia/commons/0/07/Kot-026.jpg",
  "https://static.dw.com/image/60081262_403.jpg",
  "https://govzalla.com/wp-content/uploads/2015/02/little_cute_cat_1920x1080.jpg",
  "https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941_960_720.jpg",
];

// const btn = document.querySelectorAll('.slider-container button');
const [prevBtn, nextBtn] = document.querySelectorAll(".slider-container button");
const img = document.querySelector(".slider-container .slide img");

const slider = new Slider(imagesDB);

console.log(slider.currentSlide);

img.setAttribute("src", slider.currentSlide);
