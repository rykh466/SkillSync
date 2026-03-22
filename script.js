function cta() {
  alert("Welcome to SkillSync!");
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  if (name.value.trim() === "") {
    nameError.textContent = "This field is required";
    isValid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "This field is required";
    isValid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "This field is required";
    isValid = false;
  }

  if (isValid) {
    alert("Message sent successfully!");
    form.reset();
  }
});

const faders = document.querySelectorAll('.fade');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  faders.forEach(el => {
    if (el.getBoundingClientRect().top < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();

function toggleCard(card) {
  document.querySelectorAll('.feature-box').forEach(el => {
    if (el !== card) el.classList.remove('active');
  });
  card.classList.toggle("active");
}

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}