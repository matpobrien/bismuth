const colors = document.querySelectorAll("div");
const buttons = document.querySelectorAll("h1");
const title = document.getElementById("title");

title.addEventListener("click", (event) => {
  colors.forEach((shade) => {
    shade.classList.toggle("transition");
  });
  buttons.forEach((button) => {
    button.classList.toggle("transition");
  });
  console.log(event);
});
