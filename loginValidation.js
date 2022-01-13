const form = document.getElementById("loginform");
const buttonSubmit = document.getElementById("submit");
const buttonReset = document.getElementById("cancel");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorElement = document.querySelectorAll(".divError");

form.addEventListener("submit", (e) => {
  if (isFormValid() == true) {
    alert(" You are Logged in ");
  } else {
    e.preventDefault();
  }
});

function isFormValid() {
  const inputContainers = form.querySelectorAll(".input-control");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".divError");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;

  const errorDisplay = inputControl.querySelector(".divError");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const setCancel = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".divError");
  const inputs = document.querySelectorAll("input");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputs.forEach((input) => (input.value = ""));
};

const validateInputs = () => {
  const usernameValue = username.value.trim();

  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};

buttonSubmit.addEventListener("click", validateInputs);

buttonReset.addEventListener("click", (e) => {
  e.preventDefault();
  setCancel(username);
  setCancel(password);
});
