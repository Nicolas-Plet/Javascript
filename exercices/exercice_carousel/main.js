var container = document.getElementById("container");

var arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", MoveLeft);
var arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", MoveRight);

var img_1 = document.getElementById("img_1");
img_1.style.left = "-100%";

var img_2 = document.getElementById("img_2");
img_2.style.left= "-100%";

var img_3 = document.getElementById("img_3");
img_3.style.left = "-100%";



function MoveRight()
{
    if (img_2.style.left == "0%")
    {
        img_1.style.transition = "all 2s";
        img_2.style.transition = "all 2s";
        img_3.style.transition = "all 0s";

        img_1.style.left = "-100%";
        img_2.style.left = "-100%";
        img_3.style.left = "-100%";
    }
    else if (img_2.style.left == "-100%")
    {
        img_1.style.transition = "all 0s";
        img_2.style.transition = "all 2s";
        img_3.style.transition = "all 2s";

        img_1.style.left = "100%";
        img_2.style.left = "-200%";
        img_3.style.left = "-200%";
    }
    else
    {
        img_1.style.transition = "all 2s";
        img_2.style.transition = "all 0s";
        img_3.style.transition = "all 2s";

        img_1.style.left = "0%";
        img_2.style.left = "0%";
        img_3.style.left = "-300%";
    }
}

function MoveLeft()
{
    if (img_2.style.left == "0%")
    {
        img_1.style.transition = "all 2s";
        img_2.style.transition = "all 0s";
        img_3.style.transition = "all 2s";

        img_1.style.left = "100%";
        img_2.style.left = "-200%";
        img_3.style.left = "-200%";
    }
    else if (img_2.style.left == "-100%")
    {
        img_1.style.transition = "all 2s";
        img_2.style.transition = "all 2s";
        img_3.style.transition = "all 0s";

        img_1.style.left = "0%";
        img_2.style.left = "0%";
        img_3.style.left = "-300%";
    }
    else
    {
        img_1.style.transition = "all 0s";
        img_2.style.transition = "all 2s";
        img_3.style.transition = "all 2s";

        img_1.style.left = "-100%";
        img_2.style.left = "-100%";
        img_3.style.left = "-100%";
    }
}