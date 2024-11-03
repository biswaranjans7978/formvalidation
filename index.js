let signupForm = document.querySelector("form");

let error = document.querySelector("#error-txt");
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phn = document.querySelector("#phn").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#cnf-password").value;

  if (
    name != "" &&
    email != "" &&
    phn != "" &&
    password != "" &&
    confirmPassword != ""
  ) {
    if (phn.length == 10) {
      if (email.match(regex)) {
        if (password == confirmPassword) {
          if (password.length > 6 && confirmPassword.length > 6) {
            error.computedStyleMap.display = "none";
            signup();
          } else {
            error.innerHTML =
              "password and confirm password should be more than 6 charecter";
          }
        } else {
          error.innerHTML = "password should be match";
        }
      } else {
        error.innerHTML = "please enter valid email";
      }
    } else {
      error.innerHTML = "phone no should be 10 digit";
    }
  } else {
    error.innerHTML = "please fill the blank";
  }
});

function signup() {
  alert("signup completed");
}
