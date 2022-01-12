const form = document.getElementById("loginform");
// const buttonSubmit = document.getElementById("submit")
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  validateInputs();

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
  const errorDisplay = inputControl.querySelector(".error1");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;

  const errorDisplay = inputControl.querySelector(".error1");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
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

const btnreset = document.getElementById("cancle")
const inputs = document.querySelectorAll('input')
// const errorDisplay = document.querySelector(".error1");
btnreset.addEventListener('click' , () => {
//   inputs.forEach(input => input.value='')
// //   errorDisplay.forEach(errorDisplay => errorDisplay.innerHTML='')
//   document.querySelector(".error1").innerHTML = " ";
form.reset()
})

