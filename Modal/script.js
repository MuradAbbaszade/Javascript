"use strict";
const modal = document.querySelector(".modal");
const openModalButtons = document.querySelectorAll(".show-modal");
const closeModalButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < openModalButtons.length; i++) {
  openModalButtons[i].addEventListener("click", function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
