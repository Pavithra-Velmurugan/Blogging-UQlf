// Switch between login and registration forms
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');

// Toggle to Register Form
registerLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Toggle to Login Form
loginLink.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Registration Process
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // Store user data in localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('User already registered!');
        return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration Successful! Please login.');

    // Switch to login form after registration
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Login Process
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check user credentials
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert('Login Successful!');
        // Redirect to another page or perform action
        // window.location.href = 'dashboard.html'; // Example redirection
    } else {
        alert('Invalid email or password!');
    }
});
