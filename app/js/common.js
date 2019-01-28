$(function() {
    $('#my-menu').mmenu({
        extensions:
            [
                'widescreen',
                'theme-black',
                'effect-menu-slide',
                'pagedim-black',
                'position-right'
            ],
        navbar:
            {
                title: '<img src="img/logo-1.svg" alt="Beauty Salon">'
            }
    });


    $('#my-menu').data('mmenu').bind('open:start', function () {
        $('.hamburger').addClass('is-active');
    }).bind('close:finish', function () {
        $('.hamburger').removeClass('is-active');
    });

    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService();
        }, 100);

    });
    $('.carousel-services').owlCarousel({
        loop: false,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,

        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }

        }
    });


    function carouselService() {
        $('.carousel-services-item').each(function() {
            var self = $(this);
            var height = self.find('.carousel-services-content').outerHeight();
            self.find('.carousel-services-img').css('min-height', height);
        });
    }
    carouselService();

    $('.carousel-services-composition .h3').each(function () {
        var self = $(this);
        self.html(self.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });

    $('section .h2').each(function () {
        var self = $(this);
        self.html(self.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

    $('select').selectize();
    
    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        dots: true,
        autoHeight: true
    });

    $('.partners-carousel').owlCarousel({
        loop: true,
        smartSpeed: 700,
        nav: true,
        dots: false,
        responsiveClass: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    // Resize Window
    function onResize() {
        $('.carousel-services-content').equalHeights();  
    }
    onResize();
    window.oneresize = function () {
        onResize();
    };



    $(window).scroll(function () {
        if($(this).scrollTop() > $(this).height())
            $('.top').addClass('active');
        else
            $('.top').removeClass('active');
    });

    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    //E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var self = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: self.serialize()
        }).done(function() {
            $(self).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                self.find('.success').removeClass('active').fadeOut();
                self.trigger("reset");
            }, 3000);
        });
        return false;
    });

    $(window).on('load', function () {
       $('.preloader').delay(1000).fadeOut('slow');
    });

});
