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
  `<li class="gallery__item"><a href=""><img src=${url} alt=${alt} width="300" height=""300></a></li>  `;

const makeGaleryBrutforce = images.map((el) => makeGaleryEL(el)).join("");
galaryEl.insertAdjacentHTML("beforeend", makeGaleryBrutforce);
galaryEl.style.cssText = "display: flex; flex-wrap: wrap; list-style: none;";
// const liItem = galaryEl.children;
// liItem.style.cssText = "style: none; height: 100%";
// const listImem = document.querySelector(` ul .gallery__item`);
// listImem.style.cssText = "style: none; height: 100%; margin: 15px";
