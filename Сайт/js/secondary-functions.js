(function() {
  let logout = containUser.querySelector(".user__exit-button");

  logout.addEventListener("click", function() {
    error.classList.add("invisible-block");
    formContainer.classList.remove("invisible-block");
    containUser.classList.add("invisible-block");
  });
})();
