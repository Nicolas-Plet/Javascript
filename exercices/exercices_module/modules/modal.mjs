const modal = {
    // Création du boutton pour appeler le modal
    nb_1: document.getElementById("nb_1"),
    nb_2: document.getElementById("nb_2"),
    button: document.getElementById("button_result"),
    menu: document.getElementById("container_modal"),
    back_color: document.createElement("div"),
    modal: document.createElement("div"),
    p: document.createElement("p"),
    b: document.createElement("button"),

    Initialize: function () {

        modal.InitializeBackground();
        modal.InitializeWindow();
        modal.InitializeContent();

        modal.button.addEventListener("click", function () {
            modal.Addition();
            modal.Display();
        })
    },

    InitializeBackground: function () {
        modal.back_color.style.width = "100%";
        modal.back_color.style.height = "100%";
        modal.back_color.style.display = "block";
        modal.back_color.style.position = "fixed";
        modal.back_color.style.top = "0px";
        modal.back_color.style.left = "0px";
        modal.back_color.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    },

    InitializeWindow: function () {
        modal.modal.style.width = "300px";
        modal.modal.style.height = "150px";
        modal.modal.style.display = "flex";
        modal.modal.style.flexDirection = "column";
        modal.modal.style.justifyContent = "center";
        modal.modal.style.alignItems = "center";
        modal.modal.style.position = "absolute";
        modal.modal.style.top = "calc(50% - 150px)";
        modal.modal.style.left = "calc(50% - 75px)";
        modal.modal.style.backgroundColor = "grey";
        modal.modal.style.border = "2px black solid";
        modal.modal.style.padding = "10px";
    },

    InitializeContent: function () {
        modal.p.innerText = "Appuyer sur le boutton pour fermer la fenêtre";

        modal.b.innerHTML = "close modal";
        modal.b.style.width = "50%";
        modal.b.addEventListener("click", function () {
            modal.menu.removeChild(modal.back_color);
            modal.menu.removeChild(modal.modal);
        });
    },

    Display: function () {
        modal.menu.appendChild(modal.back_color);
        modal.menu.appendChild(modal.modal);

        modal.modal.appendChild(modal.p);
        modal.modal.appendChild(modal.b);
        modal.menu.appendChild(modal.button);
    },

    ChangeMessage: function (newText) {
        console.log("text : " + newText);
        modal.p.innerText = newText;
    },

    Addition: function () {
        if (modal.nb_1.value == "" || modal.nb_2.value == "") {
            modal.ChangeMessage("Il y a un nombre null");
        }
        else {
            let result = parseInt(modal.nb_1.value) + parseInt(modal.nb_2.value);

            modal.ChangeMessage(result.toString());
        }
    }

}

export { modal };