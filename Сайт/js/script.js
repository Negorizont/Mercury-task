var formContainer = document.querySelector(".header__form");
var form = document.forms.login;
var error = form.querySelector("p");
var containUser = document.querySelector(".header__contain");

var loginUser = function() {
  formContainer.classList.add("invisible-block");
  containUser.classList.remove("invisible-block");
  form.elements.email.style.border = "none";
  form.elements.email.style.color = "#262626";
  form.elements.password.style.border = "none";
};

var loggedIncorrect = function() {
  error.classList.remove("invisible-block");
  form.elements.email.style.border = "1px solid #ED4159";
  form.elements.email.style.color = "#ED4159";
  form.elements.password.style.border = "1px solid #ED4159";
};

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  var user = {
    email: form.email.value,
    password: form.password.value
  };

  let response = fetch(
    "https://us-central1-mercdev-academy.cloudfunctions.net/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(user)
    }
  ).then(function(response) {
    if (response.status == 200) {
      loginUser();
    } else {
      loggedIncorrect();
    }
  });
});
