let loading_bar_front = document.querySelector(".loading-bar-front");
let counter = document.querySelector(".counter");
let x = 0;
let intervel = setInterval(() => {
  counter.innerHTML = `${x}%`;
  loading_bar_front.style.width = `${x}%`;
  x++;
  if (x > 100) {
    clearInterval(intervel);
  }
}, 100);
