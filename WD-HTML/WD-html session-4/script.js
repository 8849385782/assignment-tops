/* ===========================================
   script.js
   Shared script for all Forms & Inputs pages.

   What it does:
   1. Intercepts every <form class="js-demo-form">
      on submit, runs the browser's native HTML5
      validation (checkValidity), and only then
      shows a front-end "validated successfully"
      message -- since there is no real backend
      here, nothing is actually sent to a server.
   2. Logs a per-page structural check to the
      console (element counts) so you can confirm
      each page built correctly.
=========================================== */

window.addEventListener('DOMContentLoaded', function () {

  // ---------- 1. Generic form submit handler ----------
  const forms = document.querySelectorAll('form.js-demo-form');

  forms.forEach(function (form) {
    const alertBox = form.querySelector('.validation-alert');

    form.addEventListener('submit', function (event) {
      // Always stop the real submission - this is a front-end only demo.
      event.preventDefault();
      event.stopPropagation();

      // This is the KEY line for front-end validation:
      // checkValidity() runs every required/pattern/type check
      // the browser knows about, with zero server involvement.
      if (form.checkValidity() === false) {
        // Let the browser show its native red tooltip bubbles
        form.reportValidity();
        if (alertBox) {
          alertBox.className = 'alert alert-danger validation-alert';
          alertBox.style.display = 'block';
          alertBox.textContent = 'Please fix the highlighted fields before submitting.';
        }
        console.warn('Front-end validation FAILED on form #' + form.id);
      } else {
        if (alertBox) {
          alertBox.className = 'alert alert-success validation-alert';
          alertBox.style.display = 'block';
          alertBox.textContent = '✅ Front-end validation passed! (In a real app this data would now be sent to the server via ' + form.method.toUpperCase() + '.)';
        }
        console.log('%cFront-end validation PASSED on form #' + form.id, 'color: green; font-weight: bold;');
      }

      form.classList.add('was-validated');
    });
  });

  // ---------- 2. Per-page structural validation ----------

  // Contact Us page
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const fields = contactForm.querySelectorAll('input, textarea, select');
    console.log('%cContact Us form loaded successfully with ' + fields.length + ' fields (method=' + contactForm.method + ').', 'color: green; font-weight: bold;');
  }

  // Food Review page
  const reviewForm = document.getElementById('reviewForm');
  if (reviewForm) {
    const required = reviewForm.querySelectorAll('[required]');
    console.log('%cFood Review form loaded successfully with ' + required.length + ' required fields (method=' + reviewForm.method + ').', 'color: green; font-weight: bold;');
  }

  // Login page
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    const pwd = loginForm.querySelector('input[type="password"]');
    const user = loginForm.querySelector('#username');
    if (pwd && user && pwd.required && user.required) {
      console.log('%cLogin form loaded successfully - username & password both required.', 'color: green; font-weight: bold;');
    } else {
      console.warn('Validation warning: login form is missing required attributes.');
    }
  }

  // Feedback page
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    const radios = feedbackForm.querySelectorAll('input[type="radio"]');
    const checks = feedbackForm.querySelectorAll('input[type="checkbox"]');
    const emailField = feedbackForm.querySelector('input[type="email"]');
    const hasPattern = emailField && emailField.hasAttribute('pattern');
    if (radios.length === 5 && checks.length === 3 && hasPattern) {
      console.log('%cFeedback form loaded successfully: 5 star radios, 3 feature checkboxes, gmail-only pattern email.', 'color: green; font-weight: bold;');
    } else {
      console.warn('Validation warning: feedback form structure incomplete. radios=' + radios.length + ' checks=' + checks.length + ' pattern=' + hasPattern);
    }
  }

});
