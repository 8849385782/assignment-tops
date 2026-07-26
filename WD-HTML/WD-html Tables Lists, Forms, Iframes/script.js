// ========= Shared script for all pages =========
// Runs on every page; only attaches behaviour that matches
// elements actually present on the current page.

document.addEventListener('DOMContentLoaded', function () {

  // ---- Product Review Form validation (form.html) ----
  const form = document.getElementById('reviewForm');
  if (form) {
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        if (successMsg) successMsg.style.display = 'none';
        return;
      }

      // All fields valid
      form.classList.add('was-validated');
      if (successMsg) successMsg.style.display = 'block';

      // Collect the submitted data (for demo purposes)
      const reviewData = {
        name: document.getElementById('name').value,
        product: document.getElementById('product').value,
        rating: document.getElementById('rating').value,
        review: document.getElementById('review').value
      };
      console.log('Review submitted:', reviewData);

      form.reset();
      form.classList.remove('was-validated');
    });
  }

});
