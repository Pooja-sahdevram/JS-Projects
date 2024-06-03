const left=document.querySelector('.left')
const right=document.querySelector('.right')
const containerEl=document.querySelector('.conatiner')
left.addEventListener('mouseover',()=>{
    left.style.width='75%'
    right.style.width='25%'
})
right.addEventListener('mouseover',()=>{
    right.style.width='75%'

    left.style.width='25%'

})

