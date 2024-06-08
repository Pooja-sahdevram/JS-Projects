let year=document.querySelector('.year')
let days=document.querySelector('#day')
let hours=document.querySelector('#hour')
let minnutes=document.querySelector('#minuts')
let seconds=document.querySelector('#sesconds')
let newyearDate=new Date('jan 1,2025 00:00:00').getTime()
updateCowndown()
function updateCowndown(){
    const now=new Date().getTime()
    const gap=newyearDate-now;

    const s=1000;
    const m=s*60;
    const h=m*60;
    const d=h*24
    days.innerText=`${Math.floor(gap/d)}`
    hours.innerText=`${Math.floor((gap%d)/h)}`
    minnutes.innerText=`${Math.floor((gap%h)/m)}`
    seconds.innerText=`${Math.floor((gap%m)/s)}`
}
setInterval(()=>{
    updateCowndown()
},1000)