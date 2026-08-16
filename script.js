document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.getElementById("navLinks");
  const startButton = document.getElementById("startBtn");
  const message = document.getElementById("message");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  if (startButton && message) {
    startButton.addEventListener("click", () => {
      message.textContent = "Your request has been received.";
      startButton.textContent = "Started ✓";
      startButton.disabled = true;
    });
  }
});