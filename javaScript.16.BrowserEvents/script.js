let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{

    // alert("i was clicked !!!")
    document.querySelector(".box").innerHTML="<b>the content has beem changed by an external click</b>enjoy your click"
    
})

btn.addEventListener("contextmenu",()=>{

    alert("dont hack by doing rightclick please")
  
    
})
let txt = document.getElementById("txt")
txt.addEventListener("keydown" , (e)=>{
    console.log(e.key)
})