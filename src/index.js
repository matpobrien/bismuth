// const anime = require("animejs");

const colors = document.querySelectorAll("div");
const buttons = document.querySelectorAll("h1");
const title = document.getElementById("title");
const topSides = document.querySelectorAll(".top");
const bottomSides = document.querySelectorAll(".bottom");
const leftSides = document.querySelectorAll(".left");
const rightSides = document.querySelectorAll(".right");
const reset = document.getElementById("resetting");

title.addEventListener("click", () => {
  colors.forEach((shade) => {
    shade.classList.toggle("transition");
  });
  buttons.forEach((button) => {
    button.classList.toggle("transition");
  });
});

document
  .querySelector(".invisilayer")
  .addEventListener("mousemove", (event) => {
    const pageX = event.clientX;
    const pageY = event.clientY;
    console.log(pageY);

    if (pageX > window.innerWidth / 2) {
      leftSides.forEach((layer) => {
        layer.classList.remove("translate-left");
        layer.classList.add("translate-right");
      });
      rightSides.forEach((layer) => {
        layer.classList.remove("translate-left");
        layer.classList.add("translate-right");
      });
    } else {
      leftSides.forEach((layer) => {
        layer.classList.add("translate-left");
        layer.classList.remove("translate-right");
      });
      rightSides.forEach((layer) => {
        layer.classList.add("translate-left");
        layer.classList.remove("translate-right");
      });
    }
    if (pageY > window.innerHeight / 2) {
      topSides.forEach((layer) => {
        layer.classList.add("translate-up");
        layer.classList.remove("translate-down");
      });
      bottomSides.forEach((layer) => {
        layer.classList.add("translate-up");
        layer.classList.remove("translate-down");
      });
    } else {
      topSides.forEach((layer) => {
        layer.classList.remove("translate-up");
        layer.classList.add("translate-down");
      });
      bottomSides.forEach((layer) => {
        layer.classList.remove("translate-up");
        layer.classList.add("translate-down");
      });
    }
    // console.log(screenLeft);
  });

const removeSlide = () => {
  leftSides.forEach((layer) => {
    layer.classList.remove("translate-left");
    layer.classList.remove("translate-right");
  });
  rightSides.forEach((layer) => {
    layer.classList.remove("translate-left");
    layer.classList.remove("translate-right");
  });
  topSides.forEach((layer) => {
    layer.classList.remove("translate-up");
    layer.classList.remove("translate-down");
  });
  bottomSides.forEach((layer) => {
    layer.classList.remove("translate-up");
    layer.classList.remove("translate-down");
  });
};

document.getElementById("remove").addEventListener("click", () => {
  document.querySelector(".invisilayer").classList.add("hidden");
  document.getElementById("remove").classList.add("hidden");
  reset.classList.remove("hidden");
  reset.classList.add("type");
  removeSlide();
  setTimeout(() => {
    reset.classList.add("hidden");
    document.getElementById("enable").classList.remove("hidden");
  }, 6750);
});

document.getElementById("enable").addEventListener("click", () => {
  document.querySelector(".invisilayer").classList.toggle("hidden");
  document.getElementById("remove").classList.remove("hidden");
  document.getElementById("enable").classList.add("hidden");
  reset.classList.remove("type");
});

const openMusic = () => {
  removeSlide();
  document.querySelector(".light-green").classList.toggle("open-music");
  document.querySelector(".green").classList.toggle("open-music");
  document.querySelector(".blue-green").classList.toggle("open-music");
  document.getElementById("enable").classList.add("hidden");
};

document.querySelector(".music").addEventListener("click", () => {
  openMusic();
});

const openFilm = () => {
  removeSlide();
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
  removeSlide();
  document.querySelector(".purple").classList.toggle("open-writing");
  document.querySelector(".dark-red").classList.toggle("open-writing");
  document.querySelector(".red").classList.toggle("open-writing");
  document.querySelector(".magenta").classList.toggle("open-writing");
  document.querySelector(".fuchsia").classList.toggle("open-writing");
};

document.querySelector(".writing").addEventListener("click", () => {
  openMusic();
  openFilm();
  openWriting();
});
