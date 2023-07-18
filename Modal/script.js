`use strict`;

const btnsOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-btn");

// modal open function
const openModal = function () {
  modal.classList.remove("hidden");
};

// modal close function
const closeModal = function () {
  modal.classList.add("hidden");
};

// function open/close modals

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

// btn function
document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
