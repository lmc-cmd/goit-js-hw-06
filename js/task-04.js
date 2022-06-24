"use strict";

const btnDecrementEl = document.querySelector("[data-action]");
const btnIncrementEl = document.querySelector("#counter > button:nth-child(3)");
const counterEl = document.querySelector(`#value`);

let counterValue = 0;
btnDecrementEl.addEventListener(`click`, () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
btnIncrementEl.addEventListener(`click`, () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});

// btnDecrementEl.addEventListener(`click`, () => {
//   counterEl.textContent = counterEl.textContent * 1 - 1;
// });
// btnIncrementEl.addEventListener(`click`, () => {
//   counterEl.textContent = counterEl.textContent * 1 + 1;
// });
