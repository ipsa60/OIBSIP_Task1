document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let hasError = false;
    if (name === '') {
        displayError('name', 'Name is required.');
        hasError = true;
    } else {
        clearError('name');
    }

    if (email === '') {
        displayError('email', 'Email is required.');
        hasError = true;
    } else if (!emailRegex.test(email)) {
        displayError('email', 'Please enter a valid email address.');
        hasError = true;
    } else {
        clearError('email');
    }

    if (message === '') {
        displayError('message', 'Message is required.');
        hasError = true;
    } else {
        clearError('message');
    }

    if (!hasError) {
        console.log('Form submitted successfully!');
    }
});

function displayError(fieldId, errorMessage) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
}

function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

