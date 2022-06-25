"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector(`body`);
const spanEl = document.querySelector(".color");
const btnSwthColorEl = document.querySelector(".change-color");

btnSwthColorEl.addEventListener("click", onBtnClick);

function onBtnClick(e) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
