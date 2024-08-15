console.log('this is promises');


let prom1 = new Promise((resolve, reject) =>
 {
    setTimeout(() =>
    {
        let a = Math.random();
        if (a > 0.5) 
        {
            reject('the request has been rejected');
        }
        else 
        {
            console.log('yes i am done ')
            resolve("the request has been accepted")
        }
    }, 3000) ;
 }
);

let prom2 = new Promise((resolve, reject) =>
 {
    setTimeout(() =>
    {
        let a = Math.random();
        if (a > 0.5) 
        {
            reject('the request has been rejected  2 ');
        }
        else 
        {
            console.log('yes i am done  2 ')
            resolve("the request has been accepted  2")
        }
    }, 1000) ;
 }
);

let p3 = Promise.allSettled([prom1,prom2])

let b = 10 
p3.then((b) => {
    console.log(b);
}).catch ((err) => {
    console.log(err)
  
}
)   




