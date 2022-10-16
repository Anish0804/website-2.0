const hamburger = document.querySelector(".hamburger");
const lists = document.querySelector(".menuLists");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  lists.classList.toggle("hidden");
});

const extend = document.querySelectorAll(".extend");
const show = document.querySelectorAll(".content");
for (let i = 0; i < 4; i++) {
  extend[i].addEventListener("click", function () {
    console.log(document.querySelector(`.content${i}`));
    document.querySelector(`.content${i}`).classList.toggle("hidden2");
    extend[i].classList.toggle("extendActive");
  });
}
