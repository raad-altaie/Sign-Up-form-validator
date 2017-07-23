//  Sign Up form
var firstName = document.getElementById('signupname1');
var lastName = document.getElementById('signupname2');
var email = document.getElementById('signupemail');
var password = document.getElementById('signuppw');
var passwordConfirm = document.getElementById('signuppw_confirm');
var phoneNumber = document.getElementById('signupphone');
var checkBox = document.getElementById('checkBox');
var submit = document.getElementById("validate");

submit.addEventListener("click", function () {

    var email_patt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var password_patt = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    var phone_patt = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var email_match = email.value.match(email_patt);
    var password_match = password.value.match(password_patt);
    var phone_match = phoneNumber.value.match(phone_patt);

    if (!firstName.value) {
        firstName.setCustomValidity('Please submit your First Name');
        firstName.style.borderColor = "red";
        return false;
    } else if (!lastName.value) {
        lastName.setCustomValidity('Please submit your Last Name');
        lastName.style.borderColor = "red";
        return false;
    } else if (!email.value) {
        email.setCustomValidity('Please submit your Email');
        email.style.borderColor = "red";
        return false;
    } else if (email_match == null) {
        email.setCustomValidity('Please submit a vaild Email');
        email.style.borderColor = "red";
        return false;
    } else if (!password.value) {
        password.setCustomValidity('Please enter a password');
        password.style.borderColor = "red";
        return false;
    } else if (password_match == null) {
        password.setCustomValidity('The password must be between (8 to 32) characters including Uppercase letter, Special character and Alphanumeric characters.');
        password.style.borderColor = "red";
        return false;
    } else if (passwordConfirm.value == "") {
        passwordConfirm.setCustomValidity('Please confirm your password');
        passwordConfirm.style.borderColor = "red";
        return false;
    } else if (passwordConfirm.value !== password.value) {
        passwordConfirm.setCustomValidity('Password Must be Matching');
        passwordConfirm.style.borderColor = "red";
        return false;
    } else if ((phone_match == null) || (!phoneNumber.value)) {
        phoneNumber.setCustomValidity('Please submit a vaild phone number');
        phoneNumber.style.borderColor = "red";
        return false;
    } else if (checkBox.checked == false) {
        checkBox.setCustomValidity('you must agree to the terms of service.');
    } else {
        return true;
    }
});

//Clearing feedback on inputs
function Clear(Vars) {
        for (let i = 0; i < Vars.length; i++) {
            function Clr() {
                Vars[i].setCustomValidity('');
                Vars[i].style.removeProperty('border');
            }
            Vars[i].addEventListener("click", Clr, false);
            Vars[i].addEventListener("oninput", Clr, false);
        }
    
};

Clear([email, firstName, lastName, password, passwordConfirm, phoneNumber, checkBox]);
