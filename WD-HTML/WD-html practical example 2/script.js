// Highlight the current page in the navbar
document.addEventListener("DOMContentLoaded", function () {
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    if (link.getAttribute("href") === current) {
      link.classList.add("active", "fw-bold");
    }
  });

  // Bootstrap custom validation (used on pages with a <form class="needs-validation">)
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          const alertBox = form.querySelector(".form-feedback");
          if (alertBox) {
            alertBox.className = "form-feedback alert alert-danger mt-3";
            alertBox.textContent = "Please fix the highlighted fields before submitting.";
            alertBox.classList.remove("d-none");
          }
        } else {
          form.classList.add("was-validated");
          const alertBox = form.querySelector(".form-feedback");
          if (alertBox) {
            alertBox.className = "form-feedback alert alert-success mt-3";
            alertBox.textContent = "Form submitted successfully! ✅";
            alertBox.classList.remove("d-none");
          }
          // In a real app you would send the data to a server here.
          form.reset();
          form.classList.remove("was-validated");
        }
      },
      false
    );
  });
});

// Simple live total calculator used on invoice.html
function updateInvoiceTotal() {
  const rows = document.querySelectorAll("#invoiceItems tr");
  let subtotal = 0;
  rows.forEach(function (row) {
    const qty = parseFloat(row.querySelector(".qty")?.textContent) || 0;
    const price = parseFloat(row.querySelector(".price")?.dataset.price) || 0;
    const amount = qty * price;
    const amountCell = row.querySelector(".amount");
    if (amountCell) amountCell.textContent = amount.toFixed(2);
    subtotal += amount;
  });
  const tax = subtotal * 0.05;
  const grandTotal = subtotal + tax;
  if (document.getElementById("subtotal")) document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  if (document.getElementById("tax")) document.getElementById("tax").textContent = tax.toFixed(2);
  if (document.getElementById("grandTotal")) document.getElementById("grandTotal").textContent = grandTotal.toFixed(2);
}
document.addEventListener("DOMContentLoaded", updateInvoiceTotal);
