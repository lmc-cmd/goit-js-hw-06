"use strict";

const InputEl = document.querySelector("#validation-input");
const validNumber = InputEl.attributes[2].nodeValue;
const styleEl = document.querySelector(`style`);

InputEl.addEventListener("blur", () => {
  InputEl.value.length == validNumber
    ? (InputEl.classList = "valid")
    : (InputEl.classList = "invalid");
});
