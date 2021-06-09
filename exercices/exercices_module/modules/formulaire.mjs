import { modal } from "./modal.mjs";

const formulaire = {
    nom: document.getElementById("nom"),
    prenom: document.getElementById("prenom"),
    email: document.getElementById("email"),
    message: document.getElementById("message"),
    button: document.getElementById("button_form"),
    is_save: false,

    infos: [],

    Initialize: function() {
        formulaire.button.addEventListener("click", function() {
            formulaire.SaveInfo();
            modal.ChangeMessage("Email envoyer");
            modal.Display();
        })
    },

    SaveInfo: function() {
        formulaire.infos = [];
        formulaire.infos.push(formulaire.nom.value);
        formulaire.infos.push(formulaire.prenom.value);
        formulaire.infos.push(formulaire.email.value);
        formulaire.infos.push(formulaire.message.value);

        let stringInfos = JSON.stringify(formulaire.infos);
        localStorage.setItem("infos", stringInfos);

        formulaire.is_save = true;
    }
}

export {formulaire};