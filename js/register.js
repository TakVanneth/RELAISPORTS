// register = () => {
//     var name = document.getElementById('name').value;
//     var pass = document.getElementById('pass').value;
//     var email = document.getElementById('email').value;

//     if (name === "" || pass === "" || email === "") {
//         alert('Please fill in all the fields and try again!');
//     } else {
//         alert("Your name is: " + name + "\nYour email is: " + email);
//         window.location.href = "../account.html";
//     }
// }
// register.js

document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before attaching event handlers

    var registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        var name = document.getElementById('name').value;
        var pass = document.getElementById('pass').value;
        var email = document.getElementById('email').value;

        if (name === "" || pass === "" || email === "") {
            alert('Please fill in all the fields and try again!');
        } else {
            alert("Your name is: " + name + "\nYour email is: " + email);
            window.location.href = "account.html";
        }
    });
});
