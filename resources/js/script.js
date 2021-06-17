$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
            if (direction === "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        })
        // ANIMATIONS
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
        offset: '65%'
    })
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp')
    }, {
        offset: '65%'
    })
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn')
    }, {
        offset: '65%'
    })
    $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated pulse')
        }, {
            offset: '65%'
        })
        // -------------------
    $('.js--scroll-to-contact').click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({
            scrollTop: $(".section-features").offset().top
        }, 2000);
    });
    $('.js--scroll-to-testimonials').click(function() {
        $('html, body').animate({
            scrollTop: $("#testimonials").offset().top
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
    $('.js--menu').click(function(e) {
        var nav = $('.js--main-nav')
            // var icon = $('ion-icon')
        nav.slideToggle(200);
        // console.log(e);
        // if (icon.attr("name", "menu-outline")) {
        //     icon.removeAttr(name);
        // } else {

        // }
    });
});