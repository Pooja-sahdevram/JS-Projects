const container = document.querySelector('.container');
const colorEl = document.getElementsByClassName("color-container");
let colorcode = '123456789abcdef';

for (let j = 0; j < colorEl.length; j++) {
    let randomcolor = '#'; // reset the color for each element
    for (let i = 0; i < 6; i++) {
        let arrayindex = Math.floor(Math.random() * 15);
        randomcolor += colorcode[arrayindex];
    }
    colorEl[j].style.backgroundColor = randomcolor; // set the color to the current element
}