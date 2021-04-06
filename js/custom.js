$(function () {
    'use strict';

    // Nice Scroll
    $('html').niceScroll({
        cursorcolor: '#e11d74',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #e11d74'
    });
    // Height Header
    $('.header').height($(window).height());
    // Smooth Scroll To Features
    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 2000);
    });
    $('.hire').click(function() {
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        }, 2000);
    });
    // Show More Item In Our Work
    $('.ourwork .show-more').click(function () {
        $('.ourwork .hidden').fadeIn(1500);
        $(this).hide();
    });
    // Check Testimonials
    let leftArrow = $('.testimonials .fa-chevron-left'),
        rightArrow = $('.testimonials .fa-chevron-right');

    function checkClients() {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
    checkClients();
    $('.testimonials i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testimonials .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {
            $('.testimonials .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });
});
