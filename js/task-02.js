"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElements = document.getElementById(`ingredients`);

const makeLiElement = (el) => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add(`item`);
  itemEl.textContent = el;
  return itemEl;
};

const galleryListItems = ingredients.map((el) => makeLiElement(el));
ulElements.append(...galleryListItems);
