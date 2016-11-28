function myFunction() {
    var x;
    if (confirm("Press a button!") == true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = x;
}
function add(){
var num1 =  Number(document.getElementById("number1").value);
var num2 =  Number(document.getElementById("number2").value);

var total = num1 + num2;
document.getElementById("output").innerHTML=total;
}
function subtract(){
var num1 =  Number(document.getElementById("number1").value);
var num2 =  Number(document.getElementById("number2").value);

var total = num1 - num2;
document.getElementById("output").innerHTML=total;
}
function multiply(){
var num1 =  Number(document.getElementById("number1").value);
var num2 =  Number(document.getElementById("number2").value);

var total = num1 * num2;
document.getElementById("output").innerHTML=total;
}
function divide(){
var num1 =  Number(document.getElementById("number1").value);
var num2 =  Number(document.getElementById("number2").value);

var total = num1 / num2;
document.getElementById("output").innerHTML=total;
}
function square(){
var num1 =  Number(document.getElementById("number1").value);
var num2 =  Number(document.getElementById("number2").value);

var total = num1 ^ num2;
document.getElementById("output").innerHTML=total;
}
