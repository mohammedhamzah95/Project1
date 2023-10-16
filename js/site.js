const form = document.getElementById('signupForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  // Display a thank-you message using a browser alert
  alert('Thank you for joining Reach New Heights: Mountain Climbing Club! You are now part of our mountain-climbing community. Get ready to conquer peaks and embrace the adventure.');
});
