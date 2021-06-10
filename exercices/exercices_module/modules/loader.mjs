const loader = {
    loader_div: document.getElementById("loader_container"),
    container_all: document.getElementsByClassName("container_all"),
    loader_title: document.getElementById("loading_title"),

    actual_percent: 0,
    title_load: "Loading",
    time: 3,

    Initialize: function () {
        loader.DisplayPercentage();
    },

    DisplayPercentage: function () {



        if (loader.actual_percent < 100) {
            let timer_speed = (1000*loader.time)/100;

            setTimeout(() => {
                loader.actual_percent++;
                loader.loader_title.innerText = loader.title_load + " " + loader.actual_percent.toString();
                loader.DisplayPercentage();
            }, timer_speed);
        }
        else
        {
            let all = loader.container_all[0];

            all.style.height = "auto";
            loader.loader_div.style.overflow = "hidden";
            loader.loader_div.style.height = "0px";
        }
    }
}

export { loader };