alert("this is a faulty calculator")
let random = Math.random()
let a = prompt("enter your first number")
let b = prompt("enter the operation")
let c  = prompt("enter your second number")


let obj = 
{
    "+" :"-",
    "*" :"+",
    "-" :"/",
    "/" :"*"
}
if(random >0.1)
{
    console.log(`the result is eval ${a} ${b} ${c}`)
    alert(`${eval(`${a} ${b} ${c}`)}`)
}
else
{
    c= obj[c]
    console.log(`the result is ${a} ${b} ${c}`)
    alert(`${eval(`${a} ${b} ${c}`)}`)
}