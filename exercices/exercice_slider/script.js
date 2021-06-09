// -----------------------------------------------------------------------
// -------------------------------------Récupération des variable---------
// -----------------------------------------------------------------------

var block_image = document.getElementById("blockImage");


// -----------------------------------------------------------------------
// -------------------------------------Variable du slider----------------
// -----------------------------------------------------------------------
var img_width = 1000;
var actual_img = 1;
var actual_left = 0;

// -----------------------------------------------------------------------
// -------------------------------------Image Suivante---------------------
// -----------------------------------------------------------------------

var button_next = document.getElementById("next");
button_next.addEventListener("click", function () {
    if (actual_left <= 0 && actual_left > (img_width * -2)) {
        actual_left = actual_left - img_width;

        actual_img = actual_img + 1;

        let actual_str = actual_left.toString() + "px";
        block_image.style.left = actual_str;
    }
});


// -----------------------------------------------------------------------
// -------------------------------------Image Précédente------------------
// -----------------------------------------------------------------------

var button_prev = document.getElementById("prev");
button_prev.addEventListener("click", function () {
    if (actual_left >= (img_width * -2) && actual_left < 0) {
        actual_left += img_width;

        actual_img = actual_img - 1;

        let actual_str = actual_left.toString() + "px";
        block_image.style.left = actual_str;
    }
});