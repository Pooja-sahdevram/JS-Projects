const hourEL=document.querySelector('#hours')
const minutesEL=document.querySelector('#minuts')
const SecondsEL=document.querySelector('#seconds')
const ampm=document.querySelector("#ampm")



function updatetime(){
    const date=new Date()
    hourEL.innerText=date.getHours()
    minutesEL.innerText=date.getMinutes()
    SecondsEL.innerText=date.getSeconds();
    ampm.innerHTML="AM"
    if(date.getHours()>12){
        ampm="PM"
    }


    setInterval(()=>{
      updatetime()

    },1000)

}
updatetime()
