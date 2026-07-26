// layout.js
// Handles validation for the "Add to Cart" quantity form in the
// Flipkart-style sidebar cart, and appends items to the cart list
// once validation passes.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('cart-form');
  const qtyInput = document.getElementById('qty');
  const cartItems = document.getElementById('cart-items');
  const successBox = document.getElementById('cart-success');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    const qty = parseInt(qtyInput.value, 10);
    let isValid = true;

    // Validate quantity: must be a whole number of 1 or more
    if (isNaN(qty) || qty < 1) {
      qtyInput.classList.add('is-invalid');
      qtyInput.classList.remove('is-valid');
      isValid = false;
    } else {
      qtyInput.classList.remove('is-invalid');
      qtyInput.classList.add('is-valid');
    }

    form.classList.add('was-validated');

    if (!isValid) {
      successBox.classList.add('d-none');
      return;
    }

    // Validation passed: add the item(s) to the cart list
    const unitPrice = 1199; // USB-C Hub price
    const li = document.createElement('li');
    li.textContent = `USB-C Hub x${qty} - ₹${unitPrice * qty}`;
    cartItems.appendChild(li);

    successBox.classList.remove('d-none');

    // Reset form for next entry
    form.reset();
    form.classList.remove('was-validated');
    qtyInput.classList.remove('is-valid');
  });
});
