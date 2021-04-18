let objGrid = [
    [1,"e","t","e"],
    [1,1,"o",1],
    [1,1,"u",1],
    ["t","a","t","a"],
    [1,1,"o",1],
    [1,1,"u",1]
]

const myFunction2 = function(myObj){
    let html = ''

    const myRows = myObj[0].length
    const myCols = myObj.length

    for(let cpt1=0; cpt1<myRows; cpt1++){
        for(let cpt2=0; cpt2<myCols; cpt2++){
            let isChar = myObj[cpt2][cpt1]
            if(isChar!=1) {
                html += '<div>'+isChar+'</div>'
            } else {
                html += '<div></div>'
            }
           
        }
    }


    return html
}

document.getElementById("container").innerHTML = myFunction2(objGrid)