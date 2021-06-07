"use strict";

var num = 50;
var count = 0;

Display();
DisplayCent(true);
Addition(20, 40);


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