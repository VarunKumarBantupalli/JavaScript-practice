let a = prompt("enter the first number")

let b = prompt("enter the second number")


if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed in java Script ")
    
}

let sum = parseInt(a) + parseInt(b)

function main() {

try {
    let x = 5 ; 
    console.log('The sum of two numbers  is '+ sum*x );
    return true ;
} catch (error) {
    console.log('error agaya bro...');
    return false ; 
    
}
finally{
    console.log('the code has been terminated');
    
}

}

let d = main() ; 





