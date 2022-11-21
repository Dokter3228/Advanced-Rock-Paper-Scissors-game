const btnRules = document.querySelector("#rules");
const closeSvg = document.querySelector("#close-svg");

btnRules.addEventListener("click", function () {
  let panel = document.querySelector(".rules-container");
  panel.classList.add("show");
});

closeSvg.addEventListener("click", function () {
  let panel = document.querySelector(".rules-container");
  panel.classList.remove("show");
});
