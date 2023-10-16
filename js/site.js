const form = document.getElementById('signupForm');
const thankYouMessage = document.getElementById('thankYouMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  // Display the thank-you message with a smooth fade-in effect
  thankYouMessage.classList.add('visible');
});
