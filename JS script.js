// Toggle Menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});

// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// Contact Form Validation with Feedback
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting immediately

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Reset feedback
  feedback.style.display = "block";
  feedback.className = "";

  if (name === "" || email === "" || message === "") {
    feedback.textContent = "⚠️ Please fill in all fields.";
    feedback.classList.add("error");
    return;
  }

  // Simple email check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback.textContent = "⚠️ Please enter a valid email address.";
    feedback.classList.add("error");
    return;
  }

  feedback.textContent = "✅ Message sent successfully!";
  feedback.classList.add("success");
  contactForm.reset(); // clear form after success
});
// Feedback Form Validation
const feedbackForm = document.getElementById("feedbackForm");
const feedbackMessage = document.getElementById("feedbackMessage");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const rating = document.getElementById("rating").value;
  const comments = document.getElementById("comments").value.trim();

  feedbackMessage.style.display = "block";
  feedbackMessage.className = "";

  if (rating === "" || comments === "") {
    feedbackMessage.textContent = "⚠️ Please select a rating and add comments.";
    feedbackMessage.classList.add("error");
    return;
  }

  feedbackMessage.textContent = "✅ Thank you for your feedback!";
  feedbackMessage.classList.add("success");
  feedbackForm.reset();
});








