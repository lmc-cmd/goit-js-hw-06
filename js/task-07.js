"use strict";

const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputEl.addEventListener("input", (e) => {
  spanTextEl.style.fontSize = `${e.target.value}px`;
});
