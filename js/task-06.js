"use strict";

const InputEl = document.querySelector("#validation-input");
const validNumber = InputEl.attributes[2].nodeValue;
const styleEl = document.querySelector(`style`);

InputEl.addEventListener("blur", () => {
  if (InputEl.value.length == validNumber) {
    InputEl.style.borderColor = "#4caf50";
  } else {
    InputEl.style.borderColor = "#f44336";
  }
});
