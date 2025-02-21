const showPasswordCheckbox = document.getElementById('show-password');
const passwordInput = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'NASUSER';
    const correctPassword = 'NASPASS';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'admin_control.html';
    } else {
        alert('Invalid username or password');
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123 || 
        (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) || 
        (event.ctrlKey && event.keyCode === 85) 
    ) {
        event.preventDefault();
    }
});
