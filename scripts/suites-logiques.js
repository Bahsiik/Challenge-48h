function checkForm() {
    const id = document.getElementById("form");
    document.getElementById("false").innerHTML = ""
    document.getElementById("true").innerHTML = ""
    if (id.value != [!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]) {
        document.getElementById("false").innerHTML = id.value
    } else {
        document.getElementById("true").innerHTML = id.value
    }
}


function checkForm2() {
    const id = document.getElementById("form2");
    document.getElementById("false2").innerHTML = ""
    document.getElementById("true2").innerHTML = ""
    if (id.value != [!+[]+!+[]+!+[]+!+[]]+[]) {
        document.getElementById("false2").innerHTML = id.value
    } else {
        document.getElementById("true2").innerHTML = id.value
    }
}


function checkForm3() {
    const id = document.getElementById("form3");
    document.getElementById("false3").innerHTML = ""
    document.getElementById("true3").innerHTML = ""
    if (id.value != [!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]) {
        document.getElementById("false3").innerHTML = id.value
    } else {
        document.getElementById("true3").innerHTML = id.value
    }
}