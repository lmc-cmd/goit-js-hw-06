"use strict";

const btnSubmitEl = document.querySelector("[type=submit]");
const formLoginEl = document.querySelector(".login-form");

formLoginEl.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value == `` ||
    event.currentTarget.elements.password.value == ``
  ) {
    return alert(`Пожалуйста, запоните все поля!`);
  } else {
    let someData = new Object({
      [event.currentTarget.elements.email.name]:
        event.currentTarget.elements.email.value,
      [event.currentTarget.elements.password.name]:
        event.currentTarget.elements.password.value,
    });
    console.log(someData);
    formLoginEl.reset();
  }
}
