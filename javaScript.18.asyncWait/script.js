console.log('async Await...');
// async function getData(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(404)
//         }, 3500);        
//     })    
// }


async function getData(){
 let x = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
 let data  = await x.json();
     // console.log(data);
      return data ;
      
}

async function main(){

console.log('loading modules');

console.log('do something else');

console.log('load data');

let data = await getData() 

console.log(data)

console.log('data loading completed');

console.log('click start to play game');

console.log('press exit');

}

main()
// data.then((v) => {

//     console.log('process data');

//     console.log("print task 2")
//     console.log("print task 3")
//     console.log("print task 4")   
// }
// )


