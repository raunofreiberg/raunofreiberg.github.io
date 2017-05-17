(function () {
    "use strict";


    let strokes = document.querySelectorAll(".strokes"),
        icon = document.querySelector(".nav__mobile"),
        fullScreenMenu = document.querySelector(".nav__mobile-fullscreen");        

    function transformStart() {

        strokes[0].classList.toggle("animate0")
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        fullScreenMenu.classList.toggle("show");        

    }

    icon.addEventListener("click", transformStart);

})();