
//Fx toggles selected header color
function clicked(){
    let headerColor = document.getElementById("revelation-start")

    if(headerColor.style.backgroundColor !== "red"){
        headerColor.style.backgroundColor = "red"
        return headerColor
    } else {
        headerColor.style.backgroundColor = "white"
        return headerColor
    }

    
}