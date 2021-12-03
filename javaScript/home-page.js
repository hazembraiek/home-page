let list_hover=document.getElementById("list-hover")
list_hover.onmouseover=() =>{
    let display_list=document.querySelector("#list-hover-child")
    display_list.classList.add("active-list-part2")
}

list_hover.onmouseleave=() =>{
    let display_list=document.querySelector("#list-hover-child")
    display_list.classList.remove("active-list-part2")
}

let list_hover_child=document.getElementById("list-hover-child")
list_hover_child.onmouseover=() =>{
    let display_list=document.querySelector("#list-hover-child")
    display_list.classList.add("active-list-part2")
}

list_hover_child.onmouseleave=() =>{
    let display_list=document.querySelector("#list-hover-child")
    display_list.classList.remove("active-list-part2")
}

let designe_click=document.querySelector(".menu-designe-click")
let display_list=document.querySelector("#list-hover-child")
let black_screen=document.querySelector(".black-screen")
let active_new_list=document.querySelector(".new-list")
let button=document.querySelector(".menu-icon")
let menu_des=document.querySelector(".menu")
let list=document.querySelector(".list")
button.onclick= () =>{
    list.classList.toggle("active")
    menu_des.classList.toggle("designe")   
    black_screen.classList.toggle("activate-black-screen")
    designe_click.classList.add("designe-click")
    setTimeout( ()=>{
        designe_click.classList.remove("designe-click")
    },200)
    active_new_list.classList.remove("active-new-list")
    display_list.classList.remove("new-designe-list-part2")
    display_list.classList.add("list-part2")
}

black_screen.onclick= ()=>{
    black_screen.classList.remove("activate-black-screen")
    menu_des.classList.remove("designe") 
    list.classList.remove("active")
}

let BtnExit=document.querySelector(".button-to-exit")
BtnExit.onclick=()=>{
    black_screen.classList.remove("activate-black-screen")
    menu_des.classList.remove("designe") 
    list.classList.remove("active")
    active_new_list.classList.remove("active-new-list")
    display_list.classList.remove("new-designe-list-part2")
    display_list.classList.add("list-part2")
}

list_hover.onclick=()=>{
    if(window.innerWidth<= 767){
    active_new_list.classList.toggle("active-new-list")
    display_list.classList.toggle("list-part2")
    display_list.classList.toggle("new-designe-list-part2")
    }
}
let card=document.querySelectorAll(".card")[1]
let boxs=document.querySelector(".boxs")
for (let i=1 ; i<=3 ; i++){
    let card=document.querySelector(".card")
    boxs.prepend(card.cloneNode(true))     
}

let boxs_second_child=document.querySelectorAll(".boxs")[1]
for (let i=1 ; i<=3 ; i++){
    boxs_second_child.prepend(card.cloneNode(true))     
}


let star=document.querySelectorAll(".star img")
let star_chek=document.querySelectorAll(".star i")
for (let i=0;i<star.length;i++){
star[i].onclick=()=>{
    star_chek[i].classList.toggle("checked")
    star[i].classList.toggle("inactive")
}
star_chek[i].onclick=()=>{
    star_chek[i].classList.toggle("checked")
    star[i].classList.toggle("inactive")
}
}

let click_Btn=document.querySelectorAll(".Btn")
click_Btn.forEach ((ele)=>{
    ele.onclick =()=>{
        ele.classList.add("click-Btn")
        setInterval(() => {
            ele.classList.remove("click-Btn")
        }, 200);
    }
})
let Btn_list=document.querySelectorAll(".Btn-list")
Btn_list.forEach ((ele)=>{
    ele.onclick =()=>{
        ele.classList.toggle("click-Btn")
    }
})
  
let icon=document.querySelectorAll(".footer i")
let list_footer=document.querySelectorAll(".footer ul")
let list_footer_parent=document.querySelectorAll(".footer .list-footer")
for (let i=0;i<icon.length;i++){
    icon[i].onclick=()=>{
       icon[i].classList.toggle("designe-icon-footer")
       list_footer[i].classList.toggle("active-list-footer")
       list_footer_parent[i].classList.toggle("active-parent-list")
}
}

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

let div_alert=document.querySelector(".footer .space-email span")
let parent_alert=document.querySelector(".alert-mail")
let exit_Btn=document.querySelector(".exit")
let alert_mes=document.querySelector(".alert")
let input_mail=document.querySelector(".footer input")
let message=document.createElement("p")
div_alert.onclick= ()=>{
    if(!validateEmail(input_mail.value)){
        message.innerHTML="Votre email invalide"
        message.style.color="red"
        alert_mes.appendChild(message)
    } else{
        message.innerHTML="Votre email est validé"
        message.style.color="green"
        alert_mes.appendChild(message)
    }
    parent_alert.classList.add("active-alert")
}
exit_Btn.onclick= ()=>{
    parent_alert.classList.remove("active-alert")
}
