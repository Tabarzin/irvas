// Get all the preview images
const previewImages = document.querySelectorAll(".preview");

// Create the modal dialog
const worksModal = document.createElement("div");
worksModal.classList.add("works-modal");

const modalContent = document.createElement("img");
modalContent.classList.add("modal-content");

worksModal.appendChild(modalContent);
document.body.appendChild(worksModal);

// Loop through all the preview images
previewImages.forEach((image) => {
  // Add click event listener to each preview image
  image.addEventListener("click", function (event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Get the URL of the big image
    const bigImageUrl = this.parentNode.getAttribute("href");

    // Set the src attribute of the modal image to the URL of the big image
    modalContent.setAttribute("src", bigImageUrl);

    // Show the modal
    worksModal.style.display = "flex";
  });
});

worksModal.addEventListener("click", (event) => {
  if (event.target === worksModal) {
    worksModal.style.display = "none";
  }
});
