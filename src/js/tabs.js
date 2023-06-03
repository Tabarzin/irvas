/* Первые табы */

const tabLinks = document.querySelectorAll(
  ".tree_link, .aluminum_link, .plastic_link, .french_link, .rise_link"
);
const tabContents = document.querySelectorAll(
  ".tree, .aluminum, .plastic, .french, .rise"
);

tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    tabLinks.forEach((link) => {
      link.classList.remove("active");
    });

    event.target.classList.add("active");

    const className = event.target.classList[0].replace("_link", "");
    tabContents.forEach((tabContent) => {
      if (tabContent.classList.contains(className)) {
        tabContent.style.display = "block";
      } else {
        tabContent.style.display = "none";
      }
    });
  });
});

/* Вторые табы. Decoration */

const decorationItems = document.querySelectorAll(".decoration_item");
const decorationContents = document.querySelectorAll(
  ".internal, .external, .rising, .roof"
);

decorationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    decorationItems.forEach((item) => {
      item.querySelector(".no_click").classList.remove("after_click");
    });

    item.querySelector(".no_click").classList.add("after_click");
    decorationContents.forEach((content) => {
      content.style.display = "none";
    });

    decorationContents[index].style.display = "block";
  });
});
