console.log("welcome to factorial calculator")
alert("welcome to factorial calculator:")
let a = prompt("enter the number:")

function factorial (a) {
    let fac = 1 ;
    for( let i = 1  ; i <= a ; i++ ){
        fac = fac * i ;

    }
    return fac 
}
let x = factorial(a);
console.log(x)