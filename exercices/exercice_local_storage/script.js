
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var age = document.getElementById("age");
var button_D = document.getElementById("button_display");
var button_S = document.getElementById("button_save");

button_D.addEventListener("click", Display);
button_S.addEventListener("click", Save);

function Display()
{
    let list = [nom.value, prenom.value, age.value];

    console.log(list);
    // console.log("Display");
}

function Save()
{
    let list = [nom.value, prenom.value, age.value];
    let chaineList = JSON.stringify(list);

    localStorage.setItem("listInfo", chaineList);
}
