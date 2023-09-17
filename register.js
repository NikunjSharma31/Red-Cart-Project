
console.log("Form submit event triggered");

document.getElementById('registerForm').addEventListener('submit', function (event) {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    // var birthdate = document.getElementById('birthdate').value;
    // var gender = document.getElementById('gender').value;
    var agreeTerms = document.getElementById('agreeTerms').checked;

    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || !agreeTerms) {
        alert("Please fill in all required fields and agree to the Terms and Conditions.");
        event.preventDefault();
    } else if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        event.preventDefault();
    }
    // else {
    //     window.location.href = "index.html";
    //     console.log("Form submitted");
    // }
});
document.getElementById('registerForm').addEventListener('submit', function (event) {
    var firstName = document.getElementById('firstName').value;
    event.preventDefault();
    window.location.href = "index.html";
    alert(`Registeration Successfully!!! Welcome ${firstName}`);
    // alert(`Welcome ${firstName}`);
});
