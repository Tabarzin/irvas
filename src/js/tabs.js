const tabLinks = document.querySelectorAll(
  ".tree_link, .aluminum_link, .plastic_link, .french_link, .rise_link"
);
const tabContents = document.querySelectorAll(
  ".tree, .aluminum, .plastic, .french, .rise"
);

tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Remove the active class from all links
    tabLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the active class to the clicked link
    event.target.classList.add("active");

    // Show the corresponding tab content based on the clicked link's class name
    const className = event.target.classList[0].replace("_link", "");
    tabContents.forEach((tabContent) => {
      if (tabContent.classList.contains(className)) {
        // If the corresponding tab content exists, display it and hide the others
        tabContent.style.display = "block";
      } else {
        tabContent.style.display = "none";
      }
    });
  });
});
