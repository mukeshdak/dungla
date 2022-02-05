// Javascript for form inputs validation

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email.toLowerCase());
}

function validate_form() {
    var username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    confirm_password = document.getElementById("confirm_password").value;

    if (username.length < 3) {
        alert("Username must be at least three characters long.");
    }

    if (validateEmail(email) != true) {
        alert("email entered is invalid");                
    }

}