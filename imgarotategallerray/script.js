const imgcontainerEl=document.querySelector(".container")

const PrevEl=document.getElementById('prev')
const nextEl=document.getElementById('next')
let x=0;
let timer=0;
PrevEl.addEventListener("click",()=>{
    x=x+45;
    clearInterval(timer)
    upategallery()
    
})

nextEl.addEventListener("click",()=>{
    x=x-45;
    clearInterval(timer)
    upategallery()
    
})

timer= setInterval(()=>{
    
    x=x+45;
    imgcontainerEl.style. transform=`perspective(1000px) rotateY(${x}deg)`

},2000)

function upategallery(){
    imgcontainerEl.style. transform=`perspective(1000px) rotateY(${x}deg)`
}
