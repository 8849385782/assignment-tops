// ============================================
// Shared JavaScript — Personal Portfolio Site
// ============================================

// Highlight the current page's nav link
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-header .nav-link').forEach(function (link) {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // Contact form validation (only runs if the form exists on the page)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      let isValid = true;

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const successMsg = document.getElementById('formSuccess');

      [name, email, message].forEach((field) => field.classList.remove('is-invalid'));
      if (successMsg) successMsg.classList.add('d-none');

      if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        email.classList.add('is-invalid');
        isValid = false;
      }

      if (!message.value.trim() || message.value.trim().length < 10) {
        message.classList.add('is-invalid');
        isValid = false;
      }

      // Prevent actual submission since this is a static demo page
      event.preventDefault();

      if (isValid) {
        contactForm.reset();
        if (successMsg) successMsg.classList.remove('d-none');
      }
    });
  }

  // Product review form validation (only runs if the form exists on the page)
  const reviewForm = document.getElementById('reviewForm');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function (event) {
      let isValid = true;

      const revName = document.getElementById('revName');
      const productName = document.getElementById('productName');
      const rating = document.getElementById('rating');
      const reviewMessage = document.getElementById('reviewMessage');
      const successMsg = document.getElementById('reviewSuccess');

      [revName, productName, rating, reviewMessage].forEach((field) => field.classList.remove('is-invalid'));
      if (successMsg) successMsg.classList.add('d-none');

      if (!revName.value.trim()) {
        revName.classList.add('is-invalid');
        isValid = false;
      }

      if (!productName.value.trim()) {
        productName.classList.add('is-invalid');
        isValid = false;
      }

      const ratingValue = Number(rating.value);
      if (!rating.value || ratingValue < 1 || ratingValue > 5) {
        rating.classList.add('is-invalid');
        isValid = false;
      }

      if (!reviewMessage.value.trim() || reviewMessage.value.trim().length < 10) {
        reviewMessage.classList.add('is-invalid');
        isValid = false;
      }

      // Prevent actual submission since this is a static demo page
      event.preventDefault();

      if (isValid) {
        reviewForm.reset();
        if (successMsg) successMsg.classList.remove('d-none');
      }
    });
  }
});
