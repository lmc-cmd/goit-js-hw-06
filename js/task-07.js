"use strict";

const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");
// let some = (spanTextEl.style.fontSize = `${inputEl.valueAsNumber}px`);

inputEl.addEventListener("change", (e) => {
  spanTextEl.style.fontSize = `${inputEl.valueAsNumber}px`;
});
