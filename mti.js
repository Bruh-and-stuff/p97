function calculateM(){
    meters=document.getElementById("meter").value
    console.log(meters)

    yards=meters * 1.0936132983
    console.log(yards)

    convY = Math.round(yards*100)
    console.log(convY)

    convy=convY/100

    document.getElementById("output").innerHTML = convy+" yards"
}
function back(){
    window.location = "index.html"
}