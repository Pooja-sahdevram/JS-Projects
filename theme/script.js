const bodyEl=document.querySelector('body')
const inputEl=document.querySelector('.input')
 inputEl.checked=JSON.parse(localStorage.getItem("theme"))
 updatebody()
function updatebody(){
    if(inputEl.checked ){
        bodyEl.style.background="black"

    }
    else{
        bodyEl.style.background='white'
        
   
    }
}
inputEl.addEventListener('input',()=>{
    updatebody();
    storetheme()

})
function storetheme(){
    localStorage.setItem("theme",JSON.stringify(inputEl.checked))

}