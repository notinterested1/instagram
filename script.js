// JavaScript code to handle login form submission

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;

    
const password = document.getElementById('password').value;

    // Send login credentials to the server using AJAX

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        email,
        password
    }));

    xhr.onload = () => {
        if (xhr.status === 200) {
            // Login successful
            window.location.href = '/';
        } else {
            // Login failed
            alert('Invalid email or password');
        }
    };
});
