const getmonth=document.querySelector("#month-name")
const getdayname=document.querySelector("#day-name")
const getdaynumber=document.querySelector("#day-number")
const getyear=document.querySelector("#year")


const date=new Date() 
getmonth.innerText=date.toLocaleString("en",{month:"long"})
let dayname=date.getDay()
getdayname.innerText=date.toLocaleDateString("en",{
    weekday:"long"
})
getdaynumber.innerText=date.getDate()
getyear.innerText=date.getFullYear()