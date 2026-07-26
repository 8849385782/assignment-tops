document.addEventListener("DOMContentLoaded", function () {
  // Highlight current page link in navbar
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    if (link.getAttribute("href") === current) {
      link.classList.add("active", "fw-bold");
    }
  });

  // Generic Bootstrap custom validation for any form.needs-validation
  document.querySelectorAll(".needs-validation").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const feedback = form.querySelector(".form-feedback");

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        if (feedback) {
          feedback.className = "form-feedback alert alert-danger mt-3";
          feedback.textContent = "Please fill in all required fields correctly.";
          feedback.classList.remove("d-none");
        }
      } else {
        form.classList.add("was-validated");
        if (feedback) {
          feedback.className = "form-feedback alert alert-success mt-3";
          feedback.textContent = "Submitted successfully! ✅";
          feedback.classList.remove("d-none");
        }
        setTimeout(function () {
          form.reset();
          form.classList.remove("was-validated");
        }, 1500);
      }
    });
  });
});
