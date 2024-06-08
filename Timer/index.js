let start =document.querySelector('.start')
let stop =document.querySelector('.stop')
let reset =document.querySelector('.reset')
let m =document.querySelector('.m')
let s =document.querySelector('.s')
let interval
let timeleft=1500;

function updatTime(){
    let minutes=Math.floor(timeleft/60)
    let seconds=timeleft%60;
   k=`${minutes.toString().padStart(2, "0")}`
    s.innerText=seconds
}
function setTimer(){
   interval=setInterval(()=>{
    timeleft--;
    updatTime()
   },1000)
}

start.addEventListener('click',()=>{
    setTimer()
 })
 stop.addEventListener('click',()=>{
    clearInterval(interval)

 })
 reset.addEventListener('click',()=>{
    clearInterval(interval)
    timeleft=1500;
    setTimer()
 })