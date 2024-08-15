function createCard(title, cName, views, monthsOld, duration) 
{     
     let viewNumber ;
     if (views < 1000){
        viewNumber = views
     }
     else if (views > 1000 && views < 1000000 ) {
        viewNumber = views / 1000  + "k"
     }
     else if ( views > 1000000){
        viewNumber = views / 1000000 + "m"
     }
    let html =
       ` <div class="card">
            <div class="image">
                <img src="thumbnail" alt=""></img>
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p> ${cName}. ${viewNumber} views . ${monthsOld} ago </p>
            </div>
        </div> `

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html ;

}
createCard("hello world program |sigma coding" , "codeWithHarry",5000000000 ,"4 months" ,"24.00") 
createCard("hello world program |sigma coding" , "codeWithHarry",5000000000 ,"4 months" ,"24.00") 
createCard("hello world program |sigma coding" , "codeWithHarry",56 ,"4 months" ,"24.00") 
createCard("hello world program |sigma coding" , "codeWithHarry",500000 ,"4 months" ,"24.00") 
createCard("hello world program |sigma coding" , "codeWithHarry",5000000000 ,"4 months" ,"24.00") 











