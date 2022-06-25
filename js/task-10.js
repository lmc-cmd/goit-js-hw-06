"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("[type=number]");
const btnCreateEl = document.querySelector("[data-create");
const btnDestroyEl = document.querySelector("[data-destroy");
const divBoxEl = document.querySelector("#boxes");

// console.log(inputEl.value);

//   function onBtnClick(e, value) {
//     document.createElement(`div`);
//     console.log(value.currentTarget.value);
//   }
// });

btnCreateEl.addEventListener("click", onBtnClick);

function onBtnClick(e) {
  const makeDivEl = (el) => {
    const divEl = document.createElement(`div`);
    divEl.style.width = `30px`;
    divEl.style.height = `30px`;
    divEl.style.backgroundColor = getRandomHexColor();
    return divEl;
  };
  for (let i = 0; i < inputEl.value; i++) {
    divBoxEl.append(makeDivEl());
  }
}

// 1. взять inputEl.value из  этого числа сделать масив от 1 до значения инпута
// 2. вешаем слушатель на кнопку при клике создать {пишем функицю на создание элемента
//   задаем стили цвет= функцияРандом, а размеры 30px}
// 3. пишем функцию создания дивов по масиву.map (e) и размеру каждого el добавляем +=1px
