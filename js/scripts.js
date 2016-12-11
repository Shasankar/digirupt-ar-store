(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    window.sr = ScrollReveal({reset: true});
    sr.reveal('.rvl1');
    sr.reveal('.rvl2',{delay: 100});
    sr.reveal('.rvl3',{delay: 200});
    sr.reveal('.rvl4',{delay: 300});
    sr.reveal('.rvl5',{delay: 400});
    sr.reveal('.rvl6',{delay: 500});
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);