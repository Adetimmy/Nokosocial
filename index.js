const icons = document.querySelectorAll(".icos")
const removeIcon = function(){
    icons.forEach(icon =>{
        icon.classList.remove("active")
})
}
const removemsg = function(){
    messagestag.forEach(tab =>{
        tab.classList.remove("active")
})
}
//============asideleft icons===================
const checkingIcon = function(){
    icons.forEach(icon =>{
       if(icon.id != "message-notification"){
            console.log("eliuse")
            document.querySelector("main .container .asideright .right").style.display = "none"  
       }
       else{
            console.log("else")
            messagesCount.style.display = "none"
            document.querySelector("main .container .asideright .right").style.display = "flex"
       }
})}
icons.forEach(icon =>{
    icon.addEventListener("click", () =>{
        removeIcon()
        icon.classList.add("active")
    if(icon.className != "notificationtag icos active"){
        document.querySelector("#notificationbar").style.display = "none"
    }
    else{
        document.querySelector("#notificationbar").style.display = "block"
    }
 
    })}) 


const message = document.getElementById("message-notification")
const messagesCount = document.querySelector("#message-notification .notification-count i") 
const messages = document.querySelector(".right .righthold")
message.addEventListener("click", () => {
  
    if((window.innerWidth >= 992)){
        messagesCount.style.display = "none"
        messages.style.boxShadow = "0 0 1rem var(--color-primary)"
        setTimeout(()=>{
            messages.style.boxShadow = "none"
        },2000)
    }
    else{
        checkingIcon()
     
    }
})


const messagestag = document.querySelectorAll(".msg")
messagestag.forEach(tab => {
    tab.addEventListener("click", () => {
        removemsg()
        tab.classList.add('active')
        if(tab.className == "msg rec" && Window.innerWidth >= 992){
            document.querySelector(".req").style.display = "none"
            console.log("gtg")

        }
    })
})
const chatter = document.querySelectorAll(".righthold .feedtop")
const inputMessage = document.querySelector(".right .msearch")
const searchkey = () => {
    const valu = inputMessage.value.toLowerCase()

    chatter.forEach(chat => {
      const user = chat.querySelectorAll("h5").forEach(num => {console.log(num)
      const us = num.textContent.toLowerCase()
      
      if(us.indexOf(valu) != -1){
        chat.style.display = "flex"
        }
        else{
                chat.style.display = "none"  
        }
    })})   
}

inputMessage.addEventListener('keyup', searchkey)  


const theme = document.querySelector('#theme')
const closeTheme = () => {
    document.querySelector('.custom').addEventListener("click", function(){
        document.querySelector('.custom').style.display = "none" 
    }) 
}
theme.addEventListener('click', () =>{
    document.querySelector('.custom').style.display = "grid"
    closeTheme() 
}) 
const removeFontActive = function(){
    fontSize.forEach(font =>{
        font.classList.remove("active")
})}

const fontSize = document.querySelectorAll(".custom .customi .chosefont span")
let fontSixe 
fontSize.forEach(font => {
  font.addEventListener("click", () => {
    removeFontActive()
      font.classList.add("active")
      if(font.classList.contains("fon-0")){
        fontSixe = ".5em" 
        document.querySelector(":root").style.setProperty('----sticky-top-left', '3rem')
        document.querySelector(":root").style.setProperty('----sticky-top-right', '-14.5rem')
      }
      else if(font.classList.contains("fon-1")){
        fontSixe = ".8em"  
        document.querySelector(":root").style.setProperty('----sticky-top-left', '3.4rem')
        document.querySelector(":root").style.setProperty('----sticky-top-right', '-15.5rem')
      }
      else if(font.classList.contains("fon-2")){
        fontSixe = "1em"
        document.querySelector(":root").style.setProperty('----sticky-top-left', '5.4rem')
        document.querySelector(":root").style.setProperty('----sticky-top-right', '-18rem')  
      }
      else if(font.classList.contains("fon-3")){
        fontSixe = "1.1em"  
        document.querySelector(":root").style.setProperty('----sticky-top-left', '9rem')
        document.querySelector(":root").style.setProperty('----sticky-top-right', '-22rem')
      }
      else if(font.classList.contains("fon-4")){
        document.querySelector(":root").style.setProperty('----sticky-top-left', '12rem')
        document.querySelector(":root").style.setProperty('----sticky-top-right', '25rem')
        fontSixe = "1.2em" 
      }
    document.querySelector("html").style.fontSize = fontSixe
  })
})

//============asideright icons===================

// const edit = document.querySelector('.edit')
// edit.addEventListener('click', () => {
//     inputMessage.style.

// }) 