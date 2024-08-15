class Animal {
    constructor (name){
        this.name = name 
        console.log('object is created');
        
    }
    eats(){
        console.log('animal is eating something');

        
    }
    sounds(){
        console.log('animal is sounding something');
        
    }

}
                                     
let a = new Animal("bunny") ; 
console.log(a);
