const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggleBtn.textContent = "☀️";
}

themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme",isDark ? "dark" : "light");
});

const animatedText = document.querySelector(".animated-text");
const roles = "Final-Year AIML Student | C++ • SQL • Linux | Passionate About Building Real-World Projects | Seeking Internships & SDE Opportunities";

let index = 0;

function typeText() {
    if (index < roles.length) {
        animatedText.textContent += roles.charAt(index);
        index++;
        setTimeout(typeText,100);
    }

}

document.addEventListener("DOMContentLoaded",typeText);

const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Name should contain only letters.");
    return;
  }
    
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  successMsg.style.display = "block";
  form.reset();
});
