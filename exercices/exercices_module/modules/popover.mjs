const popover = {

    pop_button: document.getElementById("pop_button"),
    background: document.getElementById("pop_background"),
    title: document.getElementById("pop_title"),
    para: document.getElementById("pop_para"),
    arrow:  document.createElement("div"),

    Initialize: function () {
        popover.pop_button.addEventListener("click", function () {
            popover.Display();
        })
        popover.Positionning();
    },

    Positionning: function () {
        let button_style = popover.pop_button.style;
        let positionX = popover.pop_button.offsetLeft + popover.pop_button.offsetWidth + 10;
        let positionY = (popover.pop_button.offsetTop + (popover.pop_button.offsetHeight / 2)) - (popover.background.offsetHeight / 2);

        popover.pop_button.appendChild(popover.background);
        popover.background.style.left = positionX.toString() + "px";
        popover.background.style.top = positionY.toString() + "px";


        popover.background.appendChild(popover.arrow);
        popover.arrow.style.position = "absolute";
        popover.arrow.style.width = "10px";
        popover.arrow.style.height = "10px";
        popover.arrow.style.zIndex = "1";
        popover.arrow.style.backgroundColor = "white";
        
        let position_arrow_Y = (popover.background.offsetHeight * 0.5) + (popover.pop_button.offsetHeight * 0.5) - (popover.arrow.offsetHeight * 0.5);
        popover.arrow.style.top = position_arrow_Y.toString() + "px";
        popover.arrow.style.left = (-popover.arrow.offsetWidth * 0.5).toString() + "px";
        popover.arrow.style.transform = "rotateZ(45deg)";

        // popover.background.style.left = button_style.left + button_style.width;
        // popover.background.style.top = button_style.top;
    },

    Display: function () {
        if (popover.background.style.opacity == 0) {
            popover.background.style.opacity = 1;
        }
        else {
            popover.background.style.opacity = 0;
        }
    }


}

export { popover };