document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Thank you, ${name}! I will get back to you shortly.`);
  
  // Clear the form fields
  this.reset();
});
