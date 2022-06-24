"use strict";
const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("#name-output");

inputElement.addEventListener("input", (e) => {
  spanElement.textContent = e.target.value;
  if (spanElement.textContent === ``) {
    spanElement.textContent = `Anonymous!`;
  }
});
