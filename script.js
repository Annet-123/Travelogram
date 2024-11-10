const countries = ["United States", "India", "France", "Germany", "Japan", "Brazil"];
        let index = 0;
        
        setInterval(() => {
            index = (index + 1) % countries.length;
            document.getElementById('country-name').textContent = `Visit ${countries[index]}`;
        }, 2000);



document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const fullname = document.getElementById('fullname').value;
            const contact = document.getElementById('contact').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const namePattern = /^[A-Za-z\s]{2,}$/;
            if (!namePattern.test(fullname)) {
                alert("Full name should only contain letters and spaces, with at least two characters.");
                return;
            }

            // Contact Validation: Exactly 10 digits
            const contactPattern = /^[0-9]{10}$/;
            if (!contactPattern.test(contact)) {
                alert("Contact number should be exactly 10 digits.");
                return;
            }

            // Date of Birth Validation: Must be 18 years or older
            if (!isValidAge(dob)) {
                alert("You must be at least 18 years old to register.");
                return;
            }

            // Email Validation: Basic email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Password Validation: Minimum 8 characters, at least one uppercase, one lowercase, one number, and one special character
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(password)) {
                alert("Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.");
                return;
            }

            // Gender Validation: Ensure a selection is made
            if (!gender) {
                alert("Please select your gender.");
                return;
            }

            // If all validations pass
            alert("Registration successful");
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            if (email && password) {
                alert('Login successful');
            } else {
                alert('Please fill out all fields');
            }

        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                alert('Login successful');
window.location.href = 'index.html';
            } else {
                alert('Please fill out all fields');
            }
        });
    }
});
