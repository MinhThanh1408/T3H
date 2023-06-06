const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");
const buttonSubmit = document.querySelector("#btnSignIn");
const errorMessage = document.querySelectorAll(".error-message");

buttonSubmit.onclick = (event) => {
  event.preventDefault();
  errorMessage.forEach((item) => {
    item.classList.remove("show");
  });

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  validateLogin(username, password);
};

const validateLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
        window.location.assign("/");
        console.log("Login successfully");
      } else if (username === "" && password === "") {
        errorMessage.forEach((item) => {
          item.classList.add("show");
        });
      }else{
        errorMessage[1].classList.add("show");
        errorMessage[2].classList.add("show");
      }
};
