var tent = 0;
function checkform(){
var id = document.getElementById("form");


document.getElementById("false").innerHTML = ""
document.getElementById("true").innerHTML = ""
if (id.value!= 5460){

  document.getElementById("false").innerHTML = "ce n'est pas le bon chiffres"
  tent=tent+1;
  document.getElementById("tent").innerHTML = tent
 
  
}
else{
 
  document.getElementById("true").innerHTML = "vous avez trouve le maillon manquant 5460 de la suite logique en  " + (tent+1)  +  "tentative(s)"
  tent=tent+1;
 
  document.getElementById("tent").innerHTML = tent;
  tent=0;
  
}
}


var tent2 = 0;
function checkform2(){
var id = document.getElementById("form2");


document.getElementById("false2").innerHTML = ""
document.getElementById("true2").innerHTML = ""
if (id.value!= 4){

  document.getElementById("false2").innerHTML = "ce n'est pas le bon chiffres"
  tent2=tent2+1;
  document.getElementById("tent2").innerHTML = tent2
 
  
}
else{
 
  document.getElementById("true2").innerHTML = "vous avez trouve le maillon manquant 4 de la suite logique en  " + (tent2+1)  +  "tentative(s)"
  tent2=tent2+1;
 
  document.getElementById("tent2").innerHTML = tent2;
  tent2=0;
  
}
}


var tent3 = 0;
function checkform3(){
var id = document.getElementById("form3");


document.getElementById("false3").innerHTML = ""
document.getElementById("true3").innerHTML = ""
if (id.value!= 60){

  document.getElementById("false3").innerHTML = "ce n'est pas le bon chiffres"
  tent3=tent3+1;
  document.getElementById("tent3").innerHTML = tent3
 
  
}
else{
 
  document.getElementById("true3").innerHTML = "vous avez trouve le maillon manquant 60 de la suite logique en  " + (tent3+1)  +  "tentative(s)"
  tent3=tent3+1;
 
  document.getElementById("tent3").innerHTML = tent3;
  tent3=0;
  
}
}