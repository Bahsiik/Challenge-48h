var tent = 0;
function checkform(){
var id = document.getElementById("form");

alert("Cliqué sur " + id.value);
document.getElementById("text").innerHTML = ""
document.getElementById("true").innerHTML = ""
if (id.value!= 5460){
  alert("false")
  
  document.getElementById("text").innerHTML = "false"
  tent=tent+1;
  document.getElementById("tent").innerHTML = tent
 
  
}
else{
  alert("true")
  document.getElementById("true").innerHTML = "true"
  tent=tent+1;
  document.getElementById("tent").innerHTML = tent;
  tent=0;
  
}
}
