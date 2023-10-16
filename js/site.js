const form = document.getElementById('signupForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  const thankYouMessage = document.getElementById('thankYouMessage');
  
  // Check if the thank-you message is already displayed
  if (!thankYouMessage.classList.contains('visible')) {
    // Display the thank-you message
    thankYouMessage.classList.add('visible');
  }
});
