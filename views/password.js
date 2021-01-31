const password = document.getElementById("password");
const alert = document.getElementById("alert");
const check = document.getElementById("check");

check.addEventListener("click", (e) => {
  checkCombination(password.value);
});

password.addEventListener("keyup", (e) => {
  e.preventDefault();
  checkCombination(password.value);
});

function checkCombination(str) {
  const regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const result = str.match(regex);

  if (result && str.length > 8) {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");

    if (str.length <= 12 && str.length > 0) {
      level.innerHTML = "weak";
    } else if (str.length > 12 && str.length <= 20) {
      level.innerHTML = "strong";
    } else if (str.length > 20) {
      level.innerHTML = "very strong";
    }

  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
  }

  alert.innerHTML = str;
}
