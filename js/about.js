const left = document.querySelector(".left");
const right = document.querySelector(".right");
const splitScreen = document.querySelector(".split-screen");

/* when the person is hovering the left */
left.addEventListener("mouseenter", () => {
  splitScreen.classList.add("hover-left");
});

/* when the person is no longer hovering the left */
left.addEventListener("mouseleave", () => {
  splitScreen.classList.remove("hover-left");
});
