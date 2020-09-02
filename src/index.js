const colors = document.querySelectorAll("div");
const buttons = document.querySelectorAll("h1");
const title = document.getElementById("title");

title.addEventListener("click", () => {
  colors.forEach((shade) => {
    shade.classList.toggle("transition");
  });
  buttons.forEach((button) => {
    button.classList.toggle("transition");
  });
});

const openMusic = () => {
  document.querySelector(".light-green").classList.toggle("open-music");
  document.querySelector(".green").classList.toggle("open-music");
  document.querySelector(".blue-green").classList.toggle("open-music");
};

document.querySelector(".music").addEventListener("click", () => {
  openMusic();
});

const openFilm = () => {
  document.querySelector(".blue-green").classList.toggle("open-film");
  document.querySelector(".teal").classList.toggle("open-film");
  document.querySelector(".blue").classList.toggle("open-film");
  document.querySelector(".lilac").classList.toggle("open-film");
  document.querySelector(".purple").classList.toggle("open-film");
};

document.querySelector(".film").addEventListener("click", () => {
  openMusic();
  openFilm();
});

const openWriting = () => {
  openFilm();
  document.querySelector(".writing").addEventListener("click", () => {
    document.querySelector(".purple").classList.toggle("open-writing");
    document.querySelector(".dark-red").classList.toggle("open-writing");
    document.querySelector(".red").classList.toggle("open-writing");
    document.querySelector(".magenta").classList.toggle("open-writing");
    document.querySelector(".fuchsia").classList.toggle("open-writing");
  });
};
