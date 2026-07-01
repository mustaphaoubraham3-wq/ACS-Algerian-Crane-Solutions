document.documentElement.classList.add("js");

document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    alert("Thank you. Your message has been received.");
  });
});
