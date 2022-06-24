"use strict";
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galaryEl = document.querySelector(`.gallery`);
const makeGaleryEL = ({ url, alt } = {}) =>
  `<li class="gallery__item"><a href=""><img src=${url} alt=${alt} width="300" height="200"
    style= margin:20px></a></li>`;

const makeGaleryBrutforce = images.map((el) => makeGaleryEL(el)).join("");
galaryEl.insertAdjacentHTML("beforeend", makeGaleryBrutforce);
galaryEl.style.cssText = "display: flex; flex-wrap: wrap; list-style: none;";
// const liItem = galaryEl.children;
// const listImem = document.querySelector(` ul .gallery__item`);
// liItem.style.cssText = "style: none; height: 100%";
//  galaryEl.element.children.style.cssText = "style: none; height: 100%";
// const liElememtns = galaryEl.children;
// console.log(liElememtns);
