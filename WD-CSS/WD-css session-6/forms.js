// forms.js
// Handles validation for the TuneWave music-app sign-up form:
// username length, valid email format, password length,
// and a required genre selection. Shows a success message
// only once every field passes.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signup-form');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const genreSelect = document.getElementById('genre');
  const successBox = document.getElementById('signup-success');

  function setValidity(input, valid) {
    if (valid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    }
  }

  function isValidEmail(value) {
    // Simple, standard-enough email pattern for client-side validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let isValid = true;

    // Username: at least 3 characters
    const usernameValid = usernameInput.value.trim().length >= 3;
    setValidity(usernameInput, usernameValid);
    if (!usernameValid) isValid = false;

    // Email: must match a basic email pattern
    const emailValid = isValidEmail(emailInput.value.trim());
    setValidity(emailInput, emailValid);
    if (!emailValid) isValid = false;

    // Password: at least 6 characters
    const passwordValid = passwordInput.value.length >= 6;
    setValidity(passwordInput, passwordValid);
    if (!passwordValid) isValid = false;

    // Genre: must be selected (not the empty placeholder)
    const genreValid = genreSelect.value !== '';
    setValidity(genreSelect, genreValid);
    if (!genreValid) isValid = false;

    form.classList.add('was-validated');

    if (!isValid) {
      successBox.classList.add('d-none');
      return;
    }

    // All checks passed
    successBox.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
    [usernameInput, emailInput, passwordInput, genreSelect].forEach(function (el) {
      el.classList.remove('is-valid');
    });
  });
});
