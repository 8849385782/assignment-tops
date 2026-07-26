// ==========================================================
// script.js — shared behavior across pages
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var status = document.getElementById('loginStatus');
      var email = document.getElementById('email').value.trim();
      var password = document.getElementById('password').value.trim();

      if (!email || !password) {
        status.textContent = 'Please enter both your email and password.';
        status.style.color = '#dc3545';
        return;
      }

      if (password.length < 6) {
        status.textContent = 'Password must be at least 6 characters.';
        status.style.color = '#dc3545';
        return;
      }

      status.textContent = 'Login successful! Welcome back.';
      status.style.color = '#198754';
      loginForm.reset();
    });
  }
});
