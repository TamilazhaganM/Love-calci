
function calculate(){
    var firstInput=document.getElementById("fname");
    var lastInput= document.getElementById("lname");
    var resultt=document.querySelector("#result")
    

     var first = firstInput.value;
     var last = lastInput.value;

     firstInput.value="";
     lastInput.value="";


if (first === "" || last === "") {
    resultt.innerHTML = "Please enter both names.";
    return;
}
var lovescore =Math.floor(Math.random()*100)+1;
var first = firstInput.value.trim();
var last = lastInput.value.trim();

if (lovescore > 70){
    resultt.innerHTML="Your love score is "+lovescore+"%. You both are made for each other, Congratulations!!!"
}
if( lovescore>30 && lovescore<=70){
    resultt.innerHTML="Your love score is "+lovescore +"%. You both wants much more understanding & patience level."
}
if(lovescore<=30){
    resultt.innerHTML="Your love score is "+lovescore +"%. The love for each other is like oil and water. "
}
        
}