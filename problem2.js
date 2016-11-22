function arrayOne(){

  var adject = new Array();
  adject = ["happy", "sad", "angry", "dead", "scared"]
   var num1 = Math.floor(Math.random()*5);


  var nouns = new Array();
 nouns = ["baby!", "statue!", "fish!", "computer!", "hat!"]
 var num2 = Math.floor(Math.random()*5);

document.getElementById("output").innerHTML+=("<br /> What a" + " " + adject[num1]+ " "+nouns[num2]);

}
