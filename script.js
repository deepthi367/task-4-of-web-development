// Navbar active link highlight (based on current page)
document.querySelectorAll("nav ul li a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Stop default refresh
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email!");
      return;
    }

    alert("Message sent successfully! (This is demo only 🚀)");
    form.reset();
  });
}
