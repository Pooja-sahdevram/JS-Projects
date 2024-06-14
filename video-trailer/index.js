let btn = document.querySelector(".btn");
let close = document.querySelector(".icon");
let trailercontainerel = document.querySelector(".trailercontainer");
btn.addEventListener("click", () => {
  trailercontainerel.classList.remove("active");
});
close.addEventListener("click", () => {
  trailercontainerel.classList.add("active");
});
