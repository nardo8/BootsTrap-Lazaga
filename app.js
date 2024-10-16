// Show message function
function showMessage(message, type) {
  const outputMessage = document.getElementById("output-message");
  outputMessage.textContent = message;
  outputMessage.className = "output-message " + (type === "success" ? "success" : "error");
  outputMessage.style.display = "block";
}

// Initialize EmailJS
(function () {
  emailjs.init("GIejThaQL1y09VYXz");
  console.log("EmailJS initialized");
})();

// Navigation functionality
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
      document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
      const activePage = document.querySelector(this.getAttribute('href'));
      activePage.style.display = 'block';
  });
});

// Form submission handler
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");

  document.querySelector('.spinner-container').style.display = 'block';

  emailjs.sendForm("service_jcxxwea", "template_kv36bf7", this).then(
      function () {
          console.log("Email sent successfully");
          showMessage("Thank you! Your message has been sent.", "success");
          document.querySelector('.spinner-container').style.display = 'none';
          setTimeout(() => {
              showMessage("", ""); // Clear message after a delay
          }, 3000);
          event.target.reset();
      },
      function (error) {
          console.error("Error sending email:", error);
          showMessage("Failed to send the message: " + JSON.stringify(error), "error");
          document.querySelector('.spinner-container').style.display = 'none';
      }
  );
});
