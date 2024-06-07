const fontEl=document.querySelector('form')
let main=document.querySelector('.main')
let deleteallbtn=document.querySelector('.deleteallbtn')
let duplicateitemcheck=0;
fontEl.addEventListener('submit',(event)=>{
let name=event.target.name.value;
let email=event.target.email.value;
let phonenumber=event.target.phonenumber.value;
event.preventDefault()


let userData=JSON.parse(localStorage.getItem('userDetails'))??[]
userData.push({
 'name':name,
 "email":email,
 "phonenumber":phonenumber
})

localStorage.setItem('userDetails',JSON.stringify(userData))
event.target.reset()



//onclick on span

dispaly()
})

//dispaly
let dispaly=()=>{
    let userData=JSON.parse(localStorage.getItem('userDetails'))??[]
    let finaldata='';
    userData.forEach((element,i)=> {
        finaldata+=`<div iv class="items">
        <span onclick='removedata(${i})'>&times;</span>
        <h5>Name</h5>
         <div class="name">${element.name}</div>

        <h5>Email</h5>
        <div class="mail">${element.email}</div>

        <h5>Phone</h5>
        <div class="numberphone">${element.phonenumber}</div>
    </div>`
    });
    main.innerHTML=finaldata;

}



function removedata(index){
    let userData=JSON.parse(localStorage.getItem('userDetails'))??[]
    userData.splice(index,1)
    localStorage.setItem('userDetails',JSON.stringify(userData))
    dispaly()



}

deleteallbtn.addEventListener('click',()=>{
    localStorage.clear()
    let userData=JSON.parse(localStorage.getItem('userDetails'))??[]
    localStorage.setItem('userDetails',JSON.stringify(userData))
    dispaly()


})


dispaly()
