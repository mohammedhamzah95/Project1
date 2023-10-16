const form = document.getElementById('signupForm');
const signupSection = document.getElementById('signupSection');
let thankYouMessageDisplayed = false;

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  // Check if the thank-you message is already displayed
  if (!thankYouMessageDisplayed) {
    // Create and display the thank-you message with a smooth fade-in effect
    const thankYouMessage = document.createElement('div');
    thankYouMessage.innerHTML = `
      <h2>Thank You for Joining Reach New Heights: Mountain Climbing Club!</h2>
      <p>You are now part of our mountain-climbing community. Get ready to conquer peaks and embrace the adventure!</p>
    `;
    thankYouMessage.classList.add('thankYouMessage');
    form.parentNode.appendChild(thankYouMessage);
    thankYouMessage.classList.add('visible');

    thankYouMessageDisplayed = true;

    // Set display property to 'none' for the signup section
    if (signupSection) {
      signupSection.style.display = 'none';
    }
  }
});
