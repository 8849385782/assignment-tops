// script.js
// Handles client-side validation for the "Suggest a Menu Item" form
// and, on success, appends the new item to the menu list on the page.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('menu-form');
  const menuList = document.getElementById('menu-list');
  const successBox = document.getElementById('form-success');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    const nameInput = document.getElementById('itemName');
    const priceInput = document.getElementById('itemPrice');

    let isValid = true;

    // Validate name: must not be empty
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
      nameInput.classList.add('is-valid');
    }

    // Validate price: must be a number greater than 0
    const priceValue = parseFloat(priceInput.value);
    if (isNaN(priceValue) || priceValue <= 0) {
      priceInput.classList.add('is-invalid');
      isValid = false;
    } else {
      priceInput.classList.remove('is-invalid');
      priceInput.classList.add('is-valid');
    }

    // Also force Bootstrap's native validation styling
    form.classList.add('was-validated');

    if (!isValid) {
      successBox.classList.add('d-none');
      return;
    }

    // If validation passed: add the new item to the menu list
    const newItem = document.createElement('li');
    newItem.className = 'menu-item';
    newItem.textContent = `${nameInput.value.trim()} - ₹${priceValue}`;
    menuList.appendChild(newItem);

    // Show success message
    successBox.classList.remove('d-none');

    // Reset the form for the next entry
    form.reset();
    form.classList.remove('was-validated');
    nameInput.classList.remove('is-valid');
    priceInput.classList.remove('is-valid');
  });
});
