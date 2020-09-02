const colors = document.querySelectorAll("div");
const buttons = document.querySelectorAll("h1");
const title = document.getElementById("title");
const music = document.querySelector(".music");

title.addEventListener("click", () => {
  colors.forEach((shade) => {
    shade.classList.toggle("transition");
  });
  buttons.forEach((button) => {
    button.classList.toggle("transition");
  });
});

// music.addEventListener("click", () => {
//   document.
// })
