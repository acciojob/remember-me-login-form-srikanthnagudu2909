//your JS code here. If required.
// Get elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');
const loginForm = document.getElementById('loginForm');

// Check if credentials exist in localStorage
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');

if (savedUsername && savedPassword) {
    existingBtn.style.display = 'block';
}

// Handle form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        // Save credentials
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        existingBtn.style.display = 'block';
    } else {
        // Remove credentials if exist
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingBtn.style.display = 'none';
    }

    // Optional: clear inputs
    usernameInput.value = '';
    passwordInput.value = '';
    checkbox.checked = false;
});

// Handle existing user login
existingBtn.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});
