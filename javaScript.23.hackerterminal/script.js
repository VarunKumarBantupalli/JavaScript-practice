alert("something illegal detected")
const addItem  = async(item) => {
    await randomDelay()
    let div  = document.createElement ("div") ;
    div.innerHTML = item ;
    document.body.append(div)
    
  
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        const timeout = Math.ceil(1 + 6 * Math.random());
        setTimeout(() => {
            resolve(); // You can pass values to resolve if needed
        }, timeout * 1000);
    });
};

let text = ["initalizzing hacking ... " , 
            "reading your files..." , 
             "password files detected..." ,
            "sending all files to the server..." ,
             "cleaning up..."]

for (const item of text) {
    addItem(item) ;
}