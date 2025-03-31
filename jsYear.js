const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-button");
const form = document.getElementById("booking-form");

document.querySelectorAll(".book-button").forEach(button => {
  button.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been sent!");
  modal.style.display = "none";
  form.reset();
});
