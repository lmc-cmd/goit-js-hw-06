"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("[type=number]");
const btnCreateEl = document.querySelector("[data-create");
const btnDestroyEl = document.querySelector("[data-destroy");
const divBoxEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", onBtnClick);

btnDestroyEl.addEventListener("click", (e) => {
  document.location.reload();
});
console.log(inputEl.value);

function onBtnClick(e) {
  const makeDivEl = (el) => {
    const divEl = document.createElement(`div`);
    divEl.style.width = divBoxEl.children.length + 30 + `px`;
    divEl.style.height = divBoxEl.children.length + 30 + `px`;
    divEl.style.backgroundColor = getRandomHexColor();
    console.dir(divEl.style.width);
    return divEl;
  };

  for (let i = 0; i < inputEl.value; i++) {
    divBoxEl.append(makeDivEl());
  }
}
