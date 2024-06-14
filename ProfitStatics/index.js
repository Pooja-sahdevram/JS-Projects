let countersE1 = document.querySelectorAll('.counter');
function increment(){
    countersE1.forEach(counterEl => {
        let i=0
         const interval=setInterval(()=>{
            counterEl.innerText = `${i}`;
            i++
            
            if(i>counterEl.getAttribute("data-ceil")){
                clearInterval(interval)
             }
         },10)    
         }
    );
}
increment()