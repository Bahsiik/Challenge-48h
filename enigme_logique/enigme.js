


function enigme1(){
var rep = document.getElementById("reponse")
if (rep.value!= 70.5){
    document.getElementById("result").innerHTML = "le resultat n'est pas bon réessayez"
}    

else{
    document.getElementById("result").innerHTML = "le resultat est bon"
    location.href = "enigme2.html"
}

}


function enigme2(){
    var rep2 = document.getElementById("reponse2")
    if (rep2.value!= 21){
        document.getElementById("result2").innerHTML = "le resultat n'est pas bon réessayez"
    }    
    
    else{
        document.getElementById("result2").innerHTML = "le resultat est bon"
        location.href = "enigme3.html"
    }
}

function enigme3(){
    var rep3 = document.getElementById("reponse3")
    if (rep3.value!= 15){
        document.getElementById("result3").innerHTML = "le resultat n'est pas bon réessayez"
    }    
    
    else{
        document.getElementById("result3").innerHTML = "le resultat est bon"
        location.href = "#"
    }
}