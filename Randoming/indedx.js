const imgcontainer=document.querySelector('.imgcontainer')
const btn= document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
 appendnewimg()
})
function appendnewimg(){
    for (let i=0;i<3;i++){
        const newEl=document.createElement("img")
    newEl.src=` https://picsum.photos/300/300?random=${Math.floor( Math.random()*2000)}>`
    imgcontainer.appendChild(newEl)
    }
}