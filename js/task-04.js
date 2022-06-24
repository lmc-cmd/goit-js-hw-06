"use strict";

const btnDecrementEl = document.querySelector("[data-action]");
const btnIncrementEl = document.querySelector("#counter > button:nth-child(3)");
const counterEl = document.querySelector(`#value`);

// вариант 2
let counterValue = 0;
btnDecrementEl.addEventListener(`click`, () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
btnIncrementEl.addEventListener(`click`, () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});

// вариант №1 кривой
// btnDecrementEl.addEventListener(`click`, () => {
//   counterEl.textContent = counterEl.textContent * 1 - 1;
// //    counterEl.textContent += 1; стыдоба ;(  !!!! исправить (привести к числу))
// });
// btnIncrementEl.addEventListener(`click`, () => {
//   counterEl.textContent = counterEl.textContent * 1 + 1;
// });
