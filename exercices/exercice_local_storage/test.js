var nom_display = document.getElementById("nom_display");
var prenom_display = document.getElementById("prenom_display");
var age_display = document.getElementById("age_display");


var chaineList = localStorage.getItem("listInfo");
var list = JSON.parse(chaineList);

console.log("list : " + list)

nom_display.innerText = list[0];
prenom_display.innerText = list[1];
age_display.innerText = list[2];

console.log("displayed");

