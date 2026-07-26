/* ============================================
   BOX MODEL & POSITIONING ASSIGNMENT — JS
   ============================================ */

/* ---- Flipkart Card: Add to Cart buttons ---- */
function addToCart(btn) {
  const inCart = btn.dataset.inCart === "true";
  btn.dataset.inCart = (!inCart).toString();
  btn.textContent = inCart ? "Add to Cart" : "✓ Added";
  btn.classList.toggle("added", !inCart);
}


/* ---- Instagram Story: mark story as viewed ---- */
function viewStory(el) {
  el.classList.add("viewed");
}


/* ---- Zomato Button: order confirmation + navbar shadow on scroll ---- */
function placeOrder(btn) {
  btn.textContent = "✓ Ordered!";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = "Order Now";
    btn.disabled = false;
  }, 2000);
}


/* ---- Sticky Navbar: add shadow once page is scrolled ---- */
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".sticky-nav");
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 10);
});


/* ---- Explanation Page: toggle position static <-> absolute ---- */
function togglePosition() {
  const child = document.getElementById("child");
  const label = document.getElementById("posLabel");
  if (!child || !label) return;

  const isAbsolute = child.classList.contains("child");
  if (isAbsolute) {
    child.classList.remove("child");
    child.classList.add("child-static");
    label.textContent = "position: static";
  } else {
    child.classList.remove("child-static");
    child.classList.add("child");
    label.textContent = "position: absolute";
  }
}
