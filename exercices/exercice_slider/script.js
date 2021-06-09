// -----------------------------------------------------------------------
// -------------------------------------Récupération des variable---------
// -----------------------------------------------------------------------

var block_image = document.getElementById("blockImage");
var imgs_slider = document.getElementsByClassName("img_slider");


// -----------------------------------------------------------------------
// -------------------------------------Variable du slider----------------
// -----------------------------------------------------------------------
var img_width = 1000;
var actual_img = 1;
//Récupération du nombre d'image dans le fichier html
var nb_img = imgs_slider.length;
//La position actuelle du slider
var actual_position = 0;

//Les variables d'automatisation
var is_launch = false;
var is_auto = true;
var is_next = true;
var time_between = 5000;
var time_restart = 10000;

// -----------------------------------------------------------------------
// -------------------------------------Image Suivante---------------------
// -----------------------------------------------------------------------

var button_next = document.getElementById("next");
button_next.addEventListener("click", function () {
    MoveNext();

    //Restart au bout de 10s l'automatisation
    is_auto = false;
    if (is_launch == false) {
        setTimeout(function () {
            is_auto = true;
            automatiqueSlide();
        }, time_restart);
        is_launch = true;
    }
});


//Bouge vers la prochaine image de droite
function MoveNext() {
    if (actual_position <= 0 && actual_position > (img_width * -(nb_img - 1))) {
        actual_position = actual_position - img_width;

        //Actualise la variable qui contient le numéro de l'image actuel
        actual_img = actual_img + 1;

        let actual_str = actual_position.toString() + "px";
        block_image.style.left = actual_str;
    }
}


// -----------------------------------------------------------------------
// -------------------------------------Image Précédente------------------
// -----------------------------------------------------------------------

var button_prev = document.getElementById("prev");
button_prev.addEventListener("click", function () {
    MovePrev();

    //Restart au bout de 10s l'automatisation
    is_auto = false;
    if (is_launch == false) {
        setTimeout(function () {
            is_auto = true;
            automatiqueSlide();
        }, time_restart);
        is_launch = true;
    }
});

//Bouge vers la prochaine image de gauche
function MovePrev() {
    if (actual_position < 0 && actual_position >= (img_width * -(nb_img - 1))) {
        actual_position += img_width;

        //Actualise la variable qui contient le numéro de l'image actuel
        actual_img = actual_img - 1;

        let actual_str = actual_position.toString() + "px";
        block_image.style.left = actual_str;
    }
}


// -----------------------------------------------------------------------
// -------------------------------------Automatique système---------------
// -----------------------------------------------------------------------

// Ont lance l'automatisation au chargement de la page
setTimeout(function () {
    automatiqueSlide();
}, time_between);

function automatiqueSlide() {

    //verification si le slider est arriver sur la dernière image
    if (actual_img == nb_img) {
        is_next = false;
    }
    //verification si le slider est arriver sur la premiere image
    else if (actual_img == 1) {
        is_next = true;
    }

    if (actual_img < nb_img && is_next) {
        //ont bouge vers la prochaine image
        if (is_auto) {
            MoveNext();
            setTimeout(function () { automatiqueSlide() }, time_between);
        }
        else {
            is_launch = false;
        }
    }
    else {
        //ont bouge vers l'image précédante
        if (is_auto && !is_next) {
            MovePrev();
            setTimeout(function () { automatiqueSlide() }, time_between);
        }
        else {
            is_launch = false;
        }
    }
}