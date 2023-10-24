function calculate(){
    grams=document.getElementById("gram").value
    console.log(grams)

    yards=grams * 0.035274
    console.log(yards)

    convO = Math.round(yards*100)
    console.log(convO)

    conv0=convO/100

    document.getElementById("output").innerHTML = conv0+" ounces"
}

function calculateM(){
    tonne=document.getElementById("tne").value
    console.log(tonne)

    yards=tonne * 1.10231
    console.log(yards)

    convT = Math.round(yards*100)
    console.log(convT)

    convt=convT/100

    document.getElementById("output2").innerHTML = convt+" tons"
}

function back(){
    window.location = "index.html"
}