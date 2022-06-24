"use strict";

// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.Для доступа к элементам формы
// используй свойство elements.Выведи обьект с введенными данными в консоль
// и очисти значения полей формы методом reset.

const inputMailEl = document.querySelector("input[type=email]");
const inputPassEl = document.querySelector("[type=password]");
const btnSubmitEl = document.querySelector("[type=submit]");

console.dir(btnSubmitEl);

// formInputEl.addEventListener("input", (event) => {
//   userNameOutputEl.textContent = event.target.value;
// });

// contactFormEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const { username, "policy-accept": checkbox } = event.target.elements;

//   console.log(event.target.elements);

//   const dataForm = {
//     username: username.value,
//     // [username.name]: username.value,
//     [checkbox.name]: checkbox.value,
//   };
//   console.log(dataForm);
// });
