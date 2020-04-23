$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    })
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({
            scrollTop: $("#plans-section").offset().top
        }, 2000);
    });
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({
            scrollTop: $(".section-features").offset().top
        }, 2000);
    });
    $('.js--scroll-to-works').click(function() {
        $('html, body').animate({
            scrollTop: $("#how-it-works").offset().top
        }, 2000);
    });
    $('.js--scroll-to-signup').click(function() {
        $('html, body').animate({
            scrollTop: $("#signup").offset().top
        }, 2000);
    });
    $('.js--scroll-to-cities').click(function() {
        $('html, body').animate({
            scrollTop: $("#cities").offset().top
        }, 2000);
    });
    $('.logo-black').click(function() {
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 2000);
    });

});