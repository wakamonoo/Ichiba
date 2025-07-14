//________loginModal
//________openModal
const modal = document.querySelector("#loginModal");

document.querySelector("#openModal").addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

//________closeModal
document.querySelector("#closeModal").addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});
