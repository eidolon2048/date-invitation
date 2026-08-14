const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");
const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const modal = document.querySelector("[data-modal]");
const openModalButton = document.querySelector("[data-open-modal]");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scrollTarget);

    if (!target) return;

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start"
    });
  });
});

if ("IntersectionObserver" in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

function openModal() {
  if (!modal) return;

  modal.hidden = false;
  document.body.classList.add("modal-open");
  const closeButton = modal.querySelector(".modal-close");
  closeButton?.focus();
}

function closeModal() {
  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");
  openModalButton?.focus();
}

openModalButton?.addEventListener("click", openModal);
closeModalButtons.forEach((button) => button.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && !modal.hidden) {
    closeModal();
  }
});
