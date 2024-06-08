let magnifier= document.querySelector('.magnifier')
let searchcontainer=document.querySelector('.searchcontainer')
let mic=document.querySelector('.mic')
let input=document.querySelector('.input')
magnifier.addEventListener('click',()=>{
searchcontainer.style.transition='.2s linear';

searchcontainer.classList.toggle("active")

})