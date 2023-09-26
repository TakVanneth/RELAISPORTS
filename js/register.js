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
$(document).ready(function() {
    function validateForm() {
        var valid = true;

        $('input').css('border-color', '');
        $('.error-message').remove();

        var name = $('#name').val();
        if (name === '') {
            $('#name').css('border-color', 'red');
            $('<div class="error-message">Please enter your name</div>').insertAfter('#name');
            valid = false;
        }

        var email = $('#email').val();
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailRegex)) {
            $('#email').css('border-color', 'red');
            $('<div class="error-message">Please enter a valid email address</div>').insertAfter('#email');
            valid = false;
        }

        var phone = $('#phone').val();
        if (phone === '') {
            $('#phone').css('border-color', 'red');
            $('<div class="error-message">Please enter your phone number</div>').insertAfter('#phone');
            valid = false;
        }

        var password = $('#pass').val();
        if (password === '') {
            $('#pass').css('border-color', 'red');
            $('<div class="error-message">Please enter a password</div>').insertAfter('#pass');
            valid = false;
        }

        var rePassword = $('#re_pass').val();
        if (password !== rePassword) {
            $('#re_pass').css('border-color', 'red');
            $('<div class="error-message">Passwords do not match</div>').insertAfter('#re_pass');
            valid = false;
        }

        return valid;
    }

    // Submit form on button click
    $('#signup').click(function(e) {
        e.preventDefault();
        if (validateForm()) {
        }
    });
});
