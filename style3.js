function add(){
var num1 =  Number(document.getElementById("number1").value);
var num2 =  Number(document.getElementById("number2").value);

var total = num1 + num2;
document.getElementById("output").innerHTML=total;
}
