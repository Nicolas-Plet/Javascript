//initialisation
var nb1;
var nb2;
var calc;
var resultat;

var num9 = document.getElementById("num9");
var num8 = document.getElementById("num8");
var num7 = document.getElementById("num7");
var num6 = document.getElementById("num6");
var num5 = document.getElementById("num5");
var num4 = document.getElementById("num4");
var num3 = document.getElementById("num3");
var num2 = document.getElementById("num2");
var num1 = document.getElementById("num1");
var num0 = document.getElementById("num0");

var plus = document.getElementById("plus");
var moins = document.getElementById("moins");
var fois = document.getElementById("fois");
var divi = document.getElementById("divi");

var egal = document.getElementById("egal");
var suppr = document.getElementById("suppr");

var affichage1 = document.getElementById("numberCalc");

var affichage2 = document.getElementById("affichageCalcul");


//==============================================
//Gestion des evenements

num9.addEventListener("click", function (event) {

    clickNumber(9);

});
num8.addEventListener("click", function (event) { clickNumber(8) });
num7.addEventListener("click", function (event) { clickNumber(7) });
num6.addEventListener("click", function (event) { clickNumber(6) });
num5.addEventListener("click", function (event) { clickNumber(5) });
num4.addEventListener("click", function (event) { clickNumber(4) });
num3.addEventListener("click", function (event) { clickNumber(3) });
num2.addEventListener("click", function (event) { clickNumber(2) });
num1.addEventListener("click", function (event) { clickNumber(1) });
num0.addEventListener("click", function (event) { clickNumber(0) });

plus.addEventListener("click", function (event) {
    calc = "additionner";
    affichageCalc("+");
});

moins.addEventListener("click", function (event) {
    calc = "soustraire";
    affichageCalc("-");
});

fois.addEventListener("click", function (event) {
    calc = "multiplier";
    affichageCalc("*");
});

divi.addEventListener("click", function (event) {
    calc = "diviser";
    affichageCalc("/");
});

egal.addEventListener("click", function () {
    egalCalc();
});

suppr.addEventListener("click", function () {
    suppression();
});



//==============================================
// Les fonctions


function clickNumber(nbClick) {

    addNb1(nbClick);
    addNb2(nbClick);
}

function addNb1(nbClick) {
    if (resultat == null) {
        if (nb1 == null && calc == null) {
            nb1 = nbClick.toString();
            affichage(nb1);
            affichageCalc(nb1);
        }

        else if (nb1 != null && calc == null) {

            nb1 = nb1 + nbClick.toString();
            affichage(nb1);
            affichageCalc(nb1);
        }
    }
    else {
        if (nb1 != null && calc == null) {
            suppression();
            nb1 = nbClick.toString();
            affichage(nb1);
            affichageCalc(nb1);
        }
    }
}

function addNb2(nbClick) {

    if (nb2 == null && calc != null) {
        nb2 = nbClick.toString();
        affichage(nb2);
        affichageCalc(nb2);
    }
    else if (nb2 != null && calc != null) {
        nb2 = nb2 + nbClick.toString();
        affichage(nb2);
        affichageCalc(nb2);
    }
}


function affichage(nbAffiche) {
    affichage1.innerText = nbAffiche;
}

function affichageCalc(display) {
    if (affichage2.innerText == null || affichage2.innerText == "")
    {
        affichage2.innerText = display;
    }
    else
    {
        affichage2.innerText += " " + display;
    }
}

function suppression() {
    affichage1.innerText = "";
    affichage2.innerText = "";
    nb1 = null;
    nb2 = null;
    resultat = null;
    calc = null;
    affichage(null);
}

function egalCalc() {

    if (calc == "additionner" && nb1 != null && nb2 != null) {

        let nombre1Int = parseInt(nb1);
        let nombre2Int = parseInt(nb2);

        resultat = nombre1Int + nombre2Int;
        affichage(resultat);

        //reset calcul
        nb1 = resultat;
        nb2 = null;
        calc = null;
    }

    if (calc == "soustraire" && nb1 != null && nb2 != null) {

        let nombre1Int = parseInt(nb1);
        let nombre2Int = parseInt(nb2);

        resultat = nombre1Int - nombre2Int;
        affichage(resultat);

        //reset calcul
        nb1 = resultat;
        nb2 = null;
        calc = null;
    }

    if (calc == "multiplier" && nb1 != null && nb2 != null) {

        let nombre1Int = parseInt(nb1);
        let nombre2Int = parseInt(nb2);

        resultat = nombre1Int * nombre2Int;
        affichage(resultat);

        //reset calcul
        nb1 = resultat;
        nb2 = null;
        calc = null;
    }

    if (calc == "diviser" && nb1 != null && nb2 != null) {

        let nombre1Int = parseInt(nb1);
        let nombre2Int = parseInt(nb2);

        resultat = nombre1Int / nombre2Int;
        affichage(resultat);

        //reset calcul
        nb1 = resultat;
        nb2 = null;
        calc = null;
    }
}


