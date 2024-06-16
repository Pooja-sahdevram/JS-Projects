let burger = document.querySelector(".burger");
let side = document.querySelector(".burgers");
burger.addEventListener("click", () => {
  if (side.style.display === "block") {
    side.style.display = "none";
  } else {
    side.style.display = "block";
  }
});
