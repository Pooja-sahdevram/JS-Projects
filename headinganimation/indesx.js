let charcterindex=0
let careerindex=0

const arrayname=["developer","prompt engineer","student"]
const bodyEl=document.querySelector('body')
const h1=document.createElement('h1')
function update(){
charcterindex++;
h1.innerHTML=`<h1>hello i am ${arrayname[careerindex].slice(0,charcterindex)}`;
    h1.style.color='white'
    bodyEl.appendChild(h1)
    setTimeout(()=>{update()},300)
    if(arrayname[careerindex].length===charcterindex){
        careerindex++;
        charcterindex=0;


    }
    
}
update()


