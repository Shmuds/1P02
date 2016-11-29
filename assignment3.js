var numArray = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
"Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen","seventeen",
"Eighteen", "Nineteen", "Twenty", "Twenty-one", "Twenty-two", "Twenty-three",
"Twenty-four", "Twenty-five"]
var num1;
var num2;

    function change(){
      num1 =  (document.getElementById("number1").value).toLowerCase();
      num2 =  (document.getElementById("number2").value).toLowerCase();

    if(num1 == "five"){
      num1 = 5;
    }
  else if (num1 == "four") {
    num1 = 4;
  }
else if (num1 == "three") {
  num1 = 3;
}

else if (num1 == "two") {
  num1 = 2;
}

else if (num1 == "one") {
  num1 = 1;
}
if (num2 == "five") {
  num2 = 5;
}
else if (num2 == "four") {
  num2 = 4;
}
else if (num2 == "three") {
  num2 = 3;
}
else if (num2 == "two"){
  num2 = 2;
}
else if (num2 == "one") {
  num2 = 1;
}

  }

function add(){
change();
var total = num1 + num2;
document.getElementById("output").innerHTML=(numArray[num1]+ " plus "+ numArray[num2]+ " equals "+ numArray[total]);
}
function subtract(){
  change();
var total = num1 - num2;
document.getElementById("output").innerHTML=(numArray[num1]+ " subtract "+ numArray[num2]+ " equals "+ numArray[total]);
}
function multiply(){
change();
var total = num1 * num2;
document.getElementById("output").innerHTML=(numArray[num1]+ " multiplied by "+ numArray[num2]+ " equals "+ numArray[total]);
}
function divide(){
change();
var total =Math.floor(num1 / num2);
document.getElementById("output").innerHTML=(numArray[num1]+ " divided by "+numArray[num2]+ " equals "+ numArray[total]);
}
