function enigme() {
    var rep = document.getElementById("reponse")
    if (rep.value != 70.5) {
        console.log("FAUX")
    } else {
        console.log("Tlmp")
    }
}


function enigme2() {
    var rep2 = document.getElementById("reponse2")
    if (rep2.value != 21) {
        document.getElementById("result2").innerHTML = "le resultat n'est pas bon réessayez"
    } else {
        document.getElementById("result2").innerHTML = "le resultat est bon"
        location.href = "enigme3.html"
    }
}

""
let tentative = 0

function enigme3() {
    var rep3 = document.getElementById("reponse3")
    if (rep3.value != 15) {
        console.log("FAUX")
        tentative +=1
        if (tentative > 5) {
            console.log("STOP WAISTING TIME")
        }
    } else {
        console.log("q8er")
    }
}