document.addEventListener('DOMContentLoaded', function () {
  // Form and feedback div selection
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Form submission event listener
  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission

      // Retrieving user inputs and trimming
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Initialize validation variables
      let isValid = true;
      const messages = [];

      // Username validation
      if (username.length < 3) {
          isValid = false;
          messages.push('Username must be at least 3 characters long.');
      }

      // Email validation
      if (!email.includes('@') || !email.includes('.')) {
          isValid = false;
          messages.push('Please enter a valid email address.');
      }

      // Password validation
      if (password.length < 8) {
          isValid = false;
          messages.push('Password must be at least 8 characters long.');
      }

      // Feedback display logic
      feedbackDiv.style.display = 'block'; // Make feedbackDiv visible

      if (isValid) {
          feedbackDiv.textContent = 'Registration successful!';
          feedbackDiv.style.color = '#28a745'; // Green color for success
      } else {
          feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with <br>
          feedbackDiv.style.color = '#dc3545'; // Red color for errors
      }
  });
});
