/////// VARIABLES
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const splitScreen = document.querySelector(".split-screen");

/////// EVENT LISTENERS
/* when the person is hovering the left */
left.addEventListener("mouseenter", () => {
  splitScreen.classList.add("hover-left");
});

/* when the person is no longer hovering the left */
left.addEventListener("mouseleave", () => {
  splitScreen.classList.remove("hover-left");
});

/* when the person is hovering the right */
right.addEventListener("mouseenter", () => {
  splitScreen.classList.add("hover-right");
});

/* when the person is no longer hovering the right */
right.addEventListener("mouseleave", () => {
  splitScreen.classList.remove("hover-right");
});
