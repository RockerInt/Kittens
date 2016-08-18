// Smooth Scrolling
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
// End Smooth Scrolling

var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);

var mQuery = false;
var btnMenu = document.getElementById("btnMenu");
var iMenu = document.getElementById("iMenu");
var navMenu = document.getElementById("navMenu");
var $itemsMenu = $(".menu a");

var toggleMenu = function () {
    navMenu.classList.toggle("active");
    iMenu.classList.toggle("fa-bars");
    iMenu.classList.toggle("fa-close");
    iMenu.classList.toggle("fa-lg");
}
var showMenu = function () {
    navMenu.classList.add("active");
    iMenu.classList.remove("fa-bars");
    iMenu.classList.add("fa-close");
    iMenu.classList.add("fa-lg");
}
var hideMenu = function () {
    navMenu.classList.remove("active");
    btnMenu.classList.add("fa-bars");
    iMenu.classList.remove("fa-close");
    iMenu.classList.remove("fa-lg");
}

function mediaQuery() {
    if (consulta.matches && !mQuery) {
        mQuery = true;
        btnMenu.addEventListener("click", toggleMenu);
        //btnMenu.addEventListener("touchstart", btnMenu_Click);
        $itemsMenu.on("click", toggleMenu);//.on("touchstart", btnMenu_Click);
    }
}
mediaQuery();

// lazy loading
var bLazy = new Blazy({
    selector: 'img'
});
var gestos;
function swipeMenu($element) {
    gestos = new Hammer(document.body);

    gestos.on('swipeleft', hideMenu);
    gestos.on('swiperight', showMenu);
}