console.log("hey this for loops")
//general loop
let a= 1 ;
for (let i = 0; i < 10; i++) {
    
    console.log(a + i)
}
//forin loop
let obj = 
{
    "name" : "varun ",
     "employee_id" : 440 ,
     company : "google" 
}
for (const key in obj)
{
     const element = obj[key] ;
     console.log(key , element )
}
let college_id =
{
    "name" : "varun kumar",
    "reg.no" : "A22126551069",
    "branch" : "Data Science"
}
for (const key in college_id)
{
    const element  = college_id[key];
    console.log( key , element)
}
//forof loop 

for (const c of "harry") {
    console.log(c)
}