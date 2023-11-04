const form = document.getElementById('signupForm');
const fullNameInput = document.getElementById('fullName');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  // Field validation
  if (fullNameInput.value.trim() === '') {
    alert('Please enter your full name.'); // Display an alert if the full name field is empty
  } else {
    alert('Thank you for joining Reach New Heights: Mountain Climbing Club! We look forward to meeting you!');
  }
});
