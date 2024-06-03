const remainingEl=document.querySelector(".remaining-charcter")
const totalel=document.querySelector(".total-charcter")
const textarea=document.querySelector('.textarea')
textarea.addEventListener('keyup',(e)=>{
   updateKEy()
})
function updateKEy(){
    totalel.innerText=textarea.value.length;
    remainingEl.innerText=textarea.getAttribute("maxlength")- textarea.value.length
}