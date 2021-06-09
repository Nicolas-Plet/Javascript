const scrolling_top = {

    button_top : document.getElementById("button_scroll_top"),
    
    Initialize : function ()
    {
        this.button_top.addEventListener("click", function() {
            window.scroll(0, 0);
        })
    }
}

export {scrolling_top};