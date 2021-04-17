//input : number, le nombre de cases vides d'affilée
//output : string, un bout de code à destination innerHTML
let createEmptyDiv = function(times)  {
   let myString = ''
    while(times>0){
        myString +='<div></div>'
        times--
    }
    
    return myString
}

createEmptyDiv(5)

//input : string, une lettre
//output : string, un bout de code 
let createFilledDiv = function(letter) {
    return '<div>'+ letter + '</div>'
}

//input : tableau, format ['E','T','E']
//output : string, un bout de code à destination innerHTML
let createStringDiv = function(myTab){
    let myString = ''
    let letters = myTab.forEach(letter => {
        myString += createFilledDiv(letter)
    });
    return myString;
}



let setGrid = function(){
    let content = createEmptyDiv(6)+ createStringDiv(['E','T','E'])+ createEmptyDiv(3)
    document.getElementById("container").innerHTML = content
}

setGrid()