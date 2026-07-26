// ==========================================================
// script.js — shared behavior across pages
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var status = document.getElementById('formStatus');
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Please fill in every field before sending.';
        status.style.color = '#dc3545';
        return;
      }

      // In a real project this would POST to a server.
      status.textContent = 'Thanks, ' + name + '! Your message has been received.';
      status.style.color = '#198754';
      form.reset();
    });
  }
});
