const accordeon = {
    accordeon_container: document.getElementById("accordeon"),

    button_1: document.getElementById("button_1"),
    button_2: document.getElementById("button_2"),
    button_3: document.getElementById("button_3"),


    content_size: "100px",
    content_1: document.getElementById("content_1"),
    content_2: document.getElementById("content_2"),
    content_3: document.getElementById("content_3"),

    Initialize: function () {
        accordeon.button_1.addEventListener("click", function () {
            accordeon.Display(0);
        })
        accordeon.button_2.addEventListener("click", function () {
            accordeon.Display(1);
        })
        accordeon.button_3.addEventListener("click", function () {
            accordeon.Display(2);
        })
    },

    Display: function (id) {

        if (id == 0) {
            if (accordeon.content_1.style.height == accordeon.content_size) {
                accordeon.Reset();
            }
            else {
                accordeon.Reset();
                accordeon.content_1.style.height = accordeon.content_size;
            }
        }
        else if (id == 1) {
            if (accordeon.content_2.style.height == accordeon.content_size) {
                accordeon.Reset();
            }
            else {
                accordeon.Reset();
                accordeon.content_2.style.height = accordeon.content_size;
            }
        }
        else {
            if (accordeon.content_3.style.height == accordeon.content_size) {
                accordeon.Reset();
            }
            else {
                accordeon.Reset();
                accordeon.content_3.style.height = accordeon.content_size;
            }
        }
    },

    Reset: function () {
        accordeon.content_1.style.height = "0px";
        accordeon.content_2.style.height = "0px";
        accordeon.content_3.style.height = "0px";
    }
}

export { accordeon };