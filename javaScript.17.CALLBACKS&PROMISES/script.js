console.log("hello guys")
console.log("what's up ")
setTimeout(() => {
    console.log("i am  from first set")
}, 3000);
setTimeout(() => {
    console.log("i am from second sync")
}, 2000);
console.log("end")
const callback = (arg) => {
    console.log(arg)
    alert(arg)

}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src
    sc.onload = callback("harry");
    document.head.append(sc)
}
loadScript("",callback)

