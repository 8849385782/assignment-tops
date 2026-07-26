/**
 * validate.js
 * A tiny reusable "did my CSS actually apply?" checker.
 * Each page calls runValidation() with a list of checks.
 * Every check is a function that returns true/false.
 * Results print into the on-page console box (#validation-output)
 * so you can SEE the validation pass without opening devtools.
 */

function runValidation(checks) {
  const output = document.getElementById("validation-output");
  if (!output) return;

  let lines = [];
  let passCount = 0;

  checks.forEach(({ label, test }) => {
    let passed = false;
    try {
      passed = !!test();
    } catch (e) {
      passed = false;
    }
    if (passed) passCount++;
    lines.push(`${passed ? "✅ PASS" : "❌ FAIL"} — ${label}`);
  });

  lines.push("");
  lines.push(`${passCount}/${checks.length} checks passed.`);
  output.textContent = lines.join("\n");
  output.parentElement.classList.toggle(
    "border-success",
    passCount === checks.length
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("run-validation-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      if (typeof pageChecks === "function") {
        runValidation(pageChecks());
      }
    });
    // auto-run once on load too
    if (typeof pageChecks === "function") {
      runValidation(pageChecks());
    }
  }
});
