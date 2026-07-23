// scripts.js

// Show and hide the registration form
function showRegistrationForm() {
    document.getElementById('registration-form').classList.remove('hidden');
}

function hideRegistrationForm() {
    document.getElementById('registration-form').classList.add('hidden');
}

// Show resume builder (Just a placeholder for now)
function showResumeBuilder() {
    alert("Resume Builder will be here.");
}

// Handle form submission
document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Registration successful!\nName: ${name}\nEmail: ${email}\nRole: ${role}`);

    // Hide the form after submission
    hideRegistrationForm();
});