`use strict`;
// let some = document.getElementById(`categories`).children.length;
// console.log(some);
console.log(
  `Number of categories: ${document.querySelectorAll(`.item`).length}`
);

document.querySelectorAll(`.item`).forEach((el) => {
  console.log(`Category:`, el.querySelector(`h2`).textContent);
  console.log(`Elements:`, el.querySelectorAll(`li`).length);
});
