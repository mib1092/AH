$(document).ready(function() {
    // scroll navigation fixed
    $(document).on("scroll", function(){
        var mainNav = $('#navbar'),
            headerHeight = $('.header-top-wrap').height();

        console.log(headerHeight);

        if($(window).scrollTop() > headerHeight && !mainNav.hasClass('active-nav')) {
            mainNav.css({'position':'fixed', 'top':0, 'left':0});
        }
        else if($(window).scrollTop() <= headerHeight) {
            mainNav.css({'position':'relative'});
        }

        $('.nav-wrap').css({'height': mainNav.height()});
    });

});