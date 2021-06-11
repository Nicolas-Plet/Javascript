const animation_scroll = {

    body: document.getElementById("body"),
    img: document.getElementById("img_anim"),
    time: 0.5,
    position_end: 0,

    Initialize: function () {

        animation_scroll.position_end = animation_scroll.img.offsetTop;

        animation_scroll.img.style.display = "flex";
        animation_scroll.img.style.position = "relative";
        animation_scroll.img.style.width = "100%";
        animation_scroll.img.style.height = "150px";
        animation_scroll.img.style.left = "0";
        animation_scroll.img.style.top = "500px";

    },

    Anim: function () {
        setTimeout(() => {
            let window_size_y = window.innerHeight;
            let element_position_y = animation_scroll.position_end;
            let position_scrollbar = window.scrollY;
            
            if (element_position_y >= position_scrollbar && 
                element_position_y <= (position_scrollbar + window_size_y) &&
                animation_scroll.img.style.top != "0px")
            {
                animation_scroll.img.style.top = "0px";
            }
            if (element_position_y > position_scrollbar && 
                element_position_y > (position_scrollbar + window_size_y) && 
                animation_scroll.img.style.top != "500px") {
                animation_scroll.img.style.top = "500px";
            }

            animation_scroll.Anim();
        }, 1000);
    },

    GetScrollPosition: function () {
        return Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft, (document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);
    }
}

export { animation_scroll };