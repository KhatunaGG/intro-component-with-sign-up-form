const btn = document.querySelector(".form__btn");
const inputs = document.querySelectorAll("input");
const form = document.querySelector(".form");
const small = document.querySelectorAll(".small");
const errorImage = document.querySelectorAll(".error__img");
const input = document.querySelector("input");

let user = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((el) => {
    user.push({
      text: el.value,
      id: el.id,
    });
  });

  let empty;
  let arr = [];
  for (let key of user) {
    if (key.text.length == "") {
      empty = key.id;
      let emptyInput = document.getElementById(`${empty}`);
      emptyInput.style.border = "1px solid red";
      let emptyInputParent = emptyInput.closest(".form__item");
      emptyInputParent.children[1].classList.remove("none");
      emptyInputParent.children[2].classList.remove("none");
    } else if (key.text.length !== "") {
      arr.push(key.id);
      arr.forEach((el) => {
        document.getElementById(el).style.border = "1px solid #38cc8b";
      });
    }
  }
});
