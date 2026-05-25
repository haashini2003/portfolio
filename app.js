console.log("Portfolio Loaded 🚀");

// Page load confirmation
document.addEventListener("DOMContentLoaded", () => {
  console.log("All sections loaded successfully ✔");
});

// CONTACT FORM → SEND EMAIL
function sendMail(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Basic validation
  if (name === "" || email === "" || message === "") {
    alert("⚠ Please fill all fields before sending!");
    return;
  }

  // Email format check (simple)
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("⚠ Please enter a valid email!");
    return;
  }

  // Mail content
  let mailtoLink = `mailto:aashihashini111@gmail.com
?subject=Portfolio Contact from ${encodeURIComponent(name)}
&body=Name: ${encodeURIComponent(name)}%0A
Email: ${encodeURIComponent(email)}%0A
Message: ${encodeURIComponent(message)}`;

  // Open mail app
  window.location.href = mailtoLink;

  // Clear form after send
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  alert("✅ Message ready to send via email client!");
}