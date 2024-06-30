let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");
let boxArray = Array.from(boxes);

boxArray.forEach((e) => {
  e.addEventListener("click", () => {
    let boxColor = getComputedStyle(e).backgroundColor;
    body.style.backgroundColor = boxColor;
  });
});

console.log(boxArray);
