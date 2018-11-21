window.onscroll = function () {
    scrollColor()
};

function scrollColor() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("main-nav").className = "change-color";
    } else {
        document.getElementById("main-nav").className = "";
    }
}
