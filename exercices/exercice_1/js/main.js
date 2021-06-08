"use strict";

var num = 50;
var count = 0;

// Display();
// DisplayCent(true);
// Addition(20, 40);


// -------------------------------------------------------------
// ---------------------------Exercice 1-----------------------------
// -------------------------------------------------------------
function Display() {
    if (num > 60) {
        alert("Supérieur à 60");
    }
    else if (num == 60) {
        alert("égale à 60");
    }
    else {
        alert("Inférieur à 60");
    }
}


// -------------------------------------------------------------
// ---------------------------Exercice 2-----------------------------
// -------------------------------------------------------------
function DisplayCent(firstLoop) {
    if (firstLoop == true) {
        console.log("While Loop");
        while (count <= 100) {
            console.log(count);
            count++;
        }
    }
    else {
        console.log("For Loop");
        for (let i = 0; i <= 100; i++) {
            console.log(i);
        }
    }
}


// -------------------------------------------------------------
// ---------------------------Exercice 3-----------------------------
// -------------------------------------------------------------
function Addition(num1, num2) {
    let result = num1 + num2;

    if (result < 50) {
        console.log("Le resultat est < à 50");
    }
    else if (result >= 50 && result <= 60) {
        console.log("Le resultat est entre 50 et 60");
    }
    else {
        console.log("Le resultat est > à 60");
    }
}


// -------------------------------------------------------------
// ---------------------------Exercice 4-----------------------------
// -------------------------------------------------------------


// Création du boutton pour appeler le modal
var button = document.createElement("button");
button.setAttribute("href", "#");
button.innerHTML = "open modal";
button.addEventListener("click", function OnClick() {
    menu.appendChild(back_color);
    menu.appendChild(modal);
})

// Récupération du menu
var menu = document.getElementById("container");

// Création du menu modal
var back_color = document.createElement("div")
back_color.style.width = "100%";
back_color.style.height = "100%";
back_color.style.display = "block";
back_color.style.position = "fixed";
back_color.style.top = "0px";
back_color.style.left = "0px";
back_color.style.backgroundColor = "rgba(0, 0, 0, 0.8)";


var modal = document.createElement("div");
modal.style.width = "300px";
modal.style.height = "150px";
modal.style.display = "flex";
modal.style.flexDirection = "column";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.position = "absolute";
modal.style.top = "calc(50% - 150px)";
modal.style.left = "calc(50% - 75px)";
modal.style.backgroundColor = "grey";
modal.style.border = "2px black solid";
modal.style.padding = "10px";

modal.style.animationName = "color_change";
modal.style.animationDuration = "10s";

// Element qui compose le modal
var p = document.createElement("p");
p.innerText = "Appuyer sur le boutton pour fermer la fenêtre";

var b = document.createElement("button");
b.innerHTML = "close modal";
b.style.width = "50%";
b.addEventListener("click", function Close() {
    menu.removeChild(back_color);
    menu.removeChild(modal);
})

modal.appendChild(p);
modal.appendChild(b);
menu.appendChild(button);