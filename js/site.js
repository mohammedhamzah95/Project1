const form = document.getElementById('signupForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  // Create and display the thank-you message with a smooth fade-in effect
  const thankYouMessage = document.createElement('div');
  thankYouMessage.innerHTML = `
    <h2>Thank You for Joining Reach New Heights: Mountain Climbing Club!</h2>
    <p>You are now part of our mountain-climbing community. Get ready to conquer peaks and embrace the adventure!</p>
  `;
  thankYouMessage.classList.add('thankYouMessage');
  form.parentNode.appendChild(thankYouMessage);
  thankYouMessage.classList.add('visible');
});
