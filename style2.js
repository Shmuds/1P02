var age=prompt("what is your age?");

function getAge(){

  var theDate=new Date();
  var year = theDate.getFullYear();

  var birthYear = year - age;

  document.getElementById("yourAge").innerHTML=birthYear;


}
