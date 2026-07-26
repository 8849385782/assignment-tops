document.getElementById('orderBtn').addEventListener('click', function () {
  const nameInput = document.getElementById('customerName');
  const errorMsg = document.getElementById('errorMsg');
  const name = nameInput.value.trim();

  // Validation: name must not be empty
  if (name === '') {
    errorMsg.style.display = 'block';
    nameInput.classList.add('is-invalid');
    return;
  }

  errorMsg.style.display = 'none';
  nameInput.classList.remove('is-invalid');
  alert('Order Placed! Thank you, ' + name + '.');

  // Briefly disable button to prevent double orders
  this.disabled = true;
  this.textContent = 'Order Confirmed';
  setTimeout(() => {
    this.disabled = false;
    this.textContent = 'Order Placed!';
    nameInput.value = '';
  }, 2000);
});
