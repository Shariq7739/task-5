document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Clear previous error and success messages
  clearMessages();

  // Get form inputs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Flag to track validity
  let isValid = true;

  // Validate Name
  if (name === '') {
    isValid = false;
    document.getElementById('name-error').textContent = 'Name is required.';
  }

  // Validate Email with Regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email === '') {
    isValid = false;
    document.getElementById('email-error').textContent = 'Email is required.';
  } else if (!emailRegex.test(email)) {
    isValid = false;
    document.getElementById('email-error').textContent = 'Please enter a valid email address.';
  }

  // Validate Message
  if (message === '') {
    isValid = false;
    document.getElementById('message-error').textContent = 'Message is required.';
  }

  // If all fields are valid, show success message
  if (isValid) {
    document.getElementById('success-message').textContent = 'Thank you for your message!';
    document.getElementById('contact-form').reset(); // Reset form fields
  }
});

function clearMessages() {
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';
  document.getElementById('success-message').textContent = '';
}
