const previewImages = document.querySelectorAll(".preview");

const worksModal = document.createElement("div");
worksModal.classList.add("works-modal");

const modalContent = document.createElement("img");
modalContent.classList.add("modal-content");

worksModal.appendChild(modalContent);
document.body.appendChild(worksModal);

previewImages.forEach((image) => {
  image.addEventListener("click", function (event) {
    event.preventDefault();

    const bigImageUrl = this.parentNode.getAttribute("href");

    modalContent.setAttribute("src", bigImageUrl);

    worksModal.style.display = "flex";
  });
});

worksModal.addEventListener("click", (event) => {
  if (event.target === worksModal) {
    worksModal.style.display = "none";
  }
});
