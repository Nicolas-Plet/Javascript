const dropdown = {

    isDisplay : false,

    button_display : document.getElementById("button_display"),

    items_container : document.getElementById("items_container"),

    items_value : ["carotte", "patate", "tomate"],

    item_height : 25,

    items : [],

    Initialize : function() {

        dropdown.button_display.addEventListener("click", function(){
            dropdown.Display_Menu();
        });

        dropdown.Initialize_Items();
    },

    Initialize_Items : function() {
        dropdown.items_value.forEach(element => {
            var button = document.createElement("button");
            button.innerText = element;
            button.className = "item";
            button.addEventListener("click", function(){
                dropdown.Action_item(button.innerText);
            })

            dropdown.items.push(button);
            dropdown.items_container.appendChild(button);
        });
    },

    Display_Menu : function() {
        if (dropdown.isDisplay == false)
        {
            let height_fit = dropdown.items_value.length * dropdown.item_height;

            dropdown.items_container.style.height = height_fit.toString() + "px";
            dropdown.isDisplay = true;
        }
        else
        {
            dropdown.items_container.style.height = "0px";
            dropdown.isDisplay = false;
        }
    },

    Action_item : function(name) {
        dropdown.button_display.innerText = name;
        dropdown.Display_Menu();
    }
}

export {dropdown};