let loneAmount=document.querySelector('#lone-amount')
let loneInterst=document.querySelector('#lone-interst')
let loneMonth=document.querySelector('#lone-Month')
let sapnel=document.querySelector('.spamEl')
let interst
function calculateLoan(){
    interst= (loneAmount.value * (loneInterst.value *0.01))/loneMonth.value;
    sapnel.innerText=interst

}

