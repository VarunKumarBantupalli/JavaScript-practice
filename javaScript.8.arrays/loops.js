let a = [1,2,22,13,11]
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element)
// }
// let newarr = []
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     newarr.push(element**2)
    
// }
// console.log(newarr)
let newarr = a.map((element  ) => {
    return element**2
})
console.log(newarr)