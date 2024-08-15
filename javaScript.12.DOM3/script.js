console.log("hello this is DOM3 ")
let rey = document.getElementsByClassName("box")
console.log(rey)
rey[2].style.backgroundColor = "red"; 
let rougr = document.getElementById("damala")
console.log(rougr)
rougr.style.backgroundColor = "red"; 
document.querySelector(".box").style.backgroundColor = "green"
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})


console.log("hello world")
let rey = document.getElementById("damala")
rey.style.backgroundColor = "red"

let arey = document.getElementsByClassName("box")
arey[2].style.backgroundColor = "green"

document.querySelector(".box").style.backgroundColor = "aqua"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "beige"
})
