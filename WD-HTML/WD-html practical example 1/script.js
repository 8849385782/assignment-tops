// ===== myprofile.html =====
document.addEventListener('DOMContentLoaded', function () {

  // --- profile page ---
  const googleLink = document.querySelector('a[href="https://www.google.com"]');
  if (googleLink) {
    googleLink.addEventListener('click', function () {
      console.log('Google link clicked, opening in a new tab.');
    });
  }

  // --- flipkart-link.html ---
  const flipkartLink = document.querySelector('a[href="https://www.flipkart.com"]');
  if (flipkartLink) {
    flipkartLink.addEventListener('click', function () {
      console.log('Flipkart link clicked, opening in a new browser tab.');
    });
  }

  // --- formatting-demo.html ---
  const markedText = document.querySelector('mark');
  if (markedText) {
    markedText.addEventListener('mouseover', function () {
      markedText.style.backgroundColor = '#ffe066';
    });
    markedText.addEventListener('mouseout', function () {
      markedText.style.backgroundColor = '';
    });
  }

  // --- zomato-favorites.html ---
  const foodItems = document.querySelectorAll('.food-card li');
  foodItems.forEach(function (item) {
    item.addEventListener('click', function () {
      item.style.color = item.style.color === 'rgb(220, 53, 69)' ? '' : '#dc3545';
    });
  });

  // --- form-validation.html ---
  const form = document.getElementById('myForm');
  const successMsg = document.getElementById('successMsg');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (form.checkValidity() === false) {
        form.classList.add('was-validated');
        successMsg.style.display = 'none';
      } else {
        form.classList.add('was-validated');
        successMsg.style.display = 'block';
        form.reset();
        form.classList.remove('was-validated');
      }
    });
  }

  console.log('Page loaded successfully.');
});
