const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("login");
const err = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //TODO: make sure we don't verify account details client side
  if (username.value === "tomer" && password.value === "mom im on tv") {
    window.location = "wow.html";
  } else {
    err.style.display = "block";
  }
});
