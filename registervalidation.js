const form = document.getElementById('registerform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const gender = document.querySelector('input[name="gender"]')
console.log(gender);

form.addEventListener('submit', e => {
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
    const errorDisplay = inputControl.querySelector('.error1');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    console.log(inputControl);
    const errorDisplay = inputControl.querySelector('.error1');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const genderValue = false;

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    
    for(var i=0; i< gender.length;i++){
        if(gender[i].checked == true){
            // genValue = true;    
            setSuccess(gender);
        }
    }
        
        if(!genderValue){
            setError(gender, 'select gender please');
            // return false;
        }

    // if(!genderValue.checked) {
    //     setError(gender, 'select gender please');
    // }  else {
    //     setSuccess(gender);
    // }

};



