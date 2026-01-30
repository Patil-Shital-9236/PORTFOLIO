const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggleBtn.textContent = "☀️";
} else {
    themeToggleBtn.textContent = "🌙";
}


themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

const animatedText = document.querySelector(".animated-text");
const roles =
    "Final-Year AIML Student | C++ • SQL • Linux | Passionate About Building Real-World Projects | Seeking Internships & SDE Opportunities";

let index = 0;
animatedText.textContent = "";

function typeText() {
    if (index < roles.length) {
        animatedText.textContent += roles.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}

document.addEventListener("DOMContentLoaded", typeText);

const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email) {
        alert("Please fill in all required fields.");
        return;
    }

    if (!nameRegex.test(name)) {
        alert("Name should contain only letters and spaces.");
        nameInput.focus();
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }

    successMsg.style.display = "block";

    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);

    form.reset();
});
