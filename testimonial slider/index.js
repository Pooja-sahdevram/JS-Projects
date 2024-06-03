const  testimonialcontainer =document.querySelector('.testimonialcontainer')
const  img =document.querySelector('.img')
const text=document.querySelector('.text')
const  username =document.querySelector('.username')
const testimonialdata=[
    {src:`https://picsum.photos/100/100?random=${Math.floor(Math.random()*1000)}`,
    text:`nsectetur adipisicing elit. Perferendis officia voluptatum cumque temporibus molestias blanditiis ipsa possimus, eligendi distinctio dolore?`,
    username:"randomname1"
    }, 
    {src:`https://picsum.photos/100/100?random=${Math.floor(Math.random()*1000)}`,
    text:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis officia voluptatum cumque temporibus molestias blanditiis ipsa possimus, eligendi distinctio dolore?`,
    username:"randomname2"
   },
   {src:`https://picsum.photos/100/100?random=${Math.floor(Math.random()*1000)}`,
    text:`Lorem ipsuefmkeeeeeeeeeeeeeeeeeeeeerendis officia voluptatum cumque temporibus molestias blanditiis ipsa possimus, eligendi distinctio dolore?`,
    username:"randomname34"
   },
]
let testindex=0
function upadtetestionial(){

    img.src=testimonialdata[testindex].src;
    text.innerText=testimonialdata[testindex].text;
    username.innerText=testimonialdata[testindex].username
    testindex++
    setTimeout(()=>{upadtetestionial()},3000)
    if(testindex===testimonialdata.length){
        testindex=0
    }

    
        
    };



upadtetestionial()


