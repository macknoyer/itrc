$(function() {

    // BEM b-intro

    $('.b-intro').each(function(){
        $context = $(this);

        $(".b-intro__slider", $context).owlCarousel({
            items:1,
            dots: true,
            dotsContainer: '#customDots'
        });
    });

    $('.footer__up').click(function(){
        $('html, body').animate({scrollTop : 0},700);
        return false;
    });
	$(document).ready(function() {
        $(".b-select__container").select2();


            
        var owl = $('#wideslider');
        owl.on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace) return 
            var carousel = e.relatedTarget,
                activeItems = owl.find('.owl-item.active').length;
            $('#wideslider_counter').html('<span style="color: #c70256;">' + (carousel.relative(carousel.current()) + activeItems-1) + '</span>' +'<span style="color: #999999;">' +  '/' + '</span>' + '<span style="color: #999999;">' +  (carousel.items().length - 1) + '</span>')
          }).owlCarousel({
            loop:false,
            nav:true,
            navText: false,
            margin:22,
            navContainerClass: 'navContainer',
            responsive:{
                0:{
                    items:1,
                    margin:7,
                    nav: false,
                    center: true
                },
                500:{
                    items:2
                },            
                960:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });
        // owl.on('mousewheel', '.owl-stage', function (e) {
        //     if (e.deltaY>0) {
        //         owl.trigger('next.owl');
        //     } else {
        //         owl.trigger('prev.owl');
        //     }
        //     e.preventDefault();
        // });

        var owl2 = $('#wideslider2');
        owl2.on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace) return 
            var carousel2 = e.relatedTarget,
                activeItems = owl2.find('.owl-item.active').length;
            $('#wideslider_counter2').html('<span style="color: #c70256;">' + (carousel2.relative(carousel2.current()) + activeItems-1) + '</span>' +'<span style="color: #999999;">' +  '/' + '</span>' + '<span style="color: #999999;">' +  (carousel2.items().length - 1) + '</span>')
          }).owlCarousel({
            loop:false,
            nav:true,
            navText: false,
            margin:22,
            navContainerClass: 'navContainer',
            responsive:{
                0:{
                    items:1,
                    margin:7,
                    nav: false,
                    center: true,
                },
                500:{
                    items:2
                },            
                960:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });
        // owl2.on('mousewheel', '.owl-stage', function (e) {
        //     if (e.deltaY>0) {
        //         owl2.trigger('next.owl');
        //     } else {
        //         owl2.trigger('prev.owl');
        //     }
        //     e.preventDefault();
        // });

        var owl3 = $('#wideslider3');
        owl3.on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace) return 
           	var carousel3 = e.relatedTarget,
                activeItems = owl3.find('.owl-item.active').length;
            $('#wideslider_counter3').html('<span style="color: #c70256;">' + (carousel3.relative(carousel3.current()) + activeItems-1) + '</span>' +'<span style="color: #999999;">' +  '/' + '</span>' + '<span style="color: #999999;">' +  (carousel3.items().length - 1) + '</span>')
          }).owlCarousel({
            loop:false,
            nav:true,
            navText: false,
            margin:22,
            navContainerClass: 'navContainer',
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },            
                960:{
                    items:2
                },
                1200:{
                    items:4
                }
            }
        });
        var owl4 = $('#wideslider4');
        owl4.on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace) return 
           	var carousel4 = e.relatedTarget,
                activeItems = owl4.find('.owl-item.active').length;
            $('#wideslider_counter4').html('<span style="color: #c70256;">' + (carousel4.relative(carousel4.current()) + activeItems) + '</span>' +'<span style="color: #999999;">' +  '/' + '</span>' + '<span style="color: #999999;">' +  carousel4.items().length + '</span>')
          }).owlCarousel({
            loop:false,
            nav:true,
            navText: false,
            margin:22,
            mouseDrag: false,
            dots: false,
            navContainerClass: 'navContainer',
            responsive:{
                0:{
                    items:2,
                    mouseDrag: true,
                    margin: 5,
                    dots: true,
                    dotsContainer: '#customDots2'

                },
                600:{
                    items:3
                },            
                960:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        });
        var owl5 = $('#otzyvy_slider');
        owl5.on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace) return 
            var carousel5 = e.relatedTarget,
                activeItems = owl5.find('.owl-item.active').length;
            $('.counter').html('<span style="color: #c70256;">' + (carousel5.relative(carousel5.current()) + activeItems-1) + '</span>' +'<span style="color: #999999;">' +  '/' + '</span>' + '<span style="color: #999999;">' +  (carousel5.items().length - 1) + '</span>')
          }).owlCarousel({
            loop:false,
            nav:true,
            navText: false,
            margin:22,
            mouseDrag: false,
            dots: false,
            navContainerClass: 'navContainer',
            responsive:{
                0:{
                    items:1,
                    mouseDrag: true
                },
                600:{
                    items:2,
                    mouseDrag: true
                },            
                960:{
                    items:2
                },
                1200:{
                    items:6
                }
            }
        });
        $('.b-item__thumbs').owlCarousel({
            margin:33,
            navText: false,
            dots: false,
            navContainerClass: 'b-item__navContainer',
            responsive:{
                0:{
                    items:1,
                    mouseDrag: true,
                    margin: 10,
                    dots: true,
                    dotsContainer: '#customDots2'

                },
                600:{
                    items:1,
                    mouseDrag: true,
                    margin: 20,
                    dots: true,
                    dotsContainer: '#customDots2'
                },            
                960:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
        $('.b-mobile__thumbs').owlCarousel({
            margin:33,
            navText: false,
            dots: false,
            navContainerClass: 'b-item__navContainer',
            responsive:{
                0:{
                    items:3,
                    margin:10
                },
                600:{
                    items:3
                },            
                960:{
                    items:6
                },
                1200:{
                    items:9
                }
            }
        });  

  		$('.content__block-inputs-quantity-input').on('input change paste', function() {
		    $(this).val(this.value.replace(/[^0-9\-]/, '')); // запрещаем ввод любых символов, кроме цифр и знака минуса
		});

		$('.content__block-inputs-quantity > div').on('click', function() {
            var input = $(this).closest('.content__block-inputs-quantity').find('.content__block-inputs-quantity-input'); // инпут
            var value = parseInt(input.val()) || 0; // получаем value инпута или 0

            if ($(this).hasClass('content__block-inputs-quantity-minus')) {
            value = value - 1; // вычитаем из value 1
            }
            if ($(this).hasClass('content__block-inputs-quantity-plus')) {
            value = value + 1; // прибавляем к value 1
            }
            input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
		});
    });

    $('.b-collections__navigation-head').on('click', function() {
        var $filter_block = $(this);
        $filter_block.toggleClass('close');
        $filter_block.next('.b-collections__navigation-container').slideToggle();
    });
    $('.b-shop__item').mouseover(function () {
        $(this).find('.b-shop__popup').show();
    });
    $('.b-shop__item').mouseleave(function () {
        $(this).find('.b-shop__popup').hide();
    });
    $('.calc_form_input').focus(function() {
        $(this).parent().addClass('focus');
    });
    $('.calc_form_input').focusout(function() {
        $(this).parent().removeClass('focus');
    });
    $().fancybox({
        selector : '[data-type="ajax"]',
        touch: false,
        afterShow : function(){
            $('.b-select__container').select2();
        }
    });
    $('.b-contacts__title').on('click', function () {
        $(this).toggleClass('hide').siblings('.b-contacts__container').slideToggle();
    });
    $('.radio label').on('click', function(){
        $(this).toggleClass('active');
    });
    $('.checkbox label').on('click', function(){
        $(this).toggleClass('active');
    });
    $('.humb').on('click', function () {
        $(this).toggleClass('active');
        $('.b-header__menu').slideToggle();
    });
    $('.footer__mobile-dropdown').on('click', function() {
        $(this).toggleClass('active');
        $(this).next('.footer__mobile-links').slideToggle();
    });
    $('#my-menu').mmenu({
        navbar: {
            title: false
        }
    });
    $('.mm-btn_next').on('click', function() {
        $('.b-header-mobile__profile').addClass('hide');
    });
    $('.mm-panel_has-navbar .mm-navbar').on('click', function() {
        $('.b-header-mobile__profile').removeClass('hide');
    });
    var API = $("#my-menu").data( "mmenu" );
    $("#my-button").click(function() {
        API.close();
        API.closeAllPanels();
    });
    $('.b-topmenu__item').hover(
        function (){
            $(this).find('.b-topmenu__dropdown').delay(1000).fadeIn();
            $(this).find('.b-topmenu__link').delay(1000).addClass('active').fadeIn();

        },
        function () {
           $(this).find('.b-topmenu__dropdown').fadeOut();
           $(this).find('.b-topmenu__link').removeClass('active');
        });
    $('.b-filter-mobile__title').on('click', function() {
        $('.b-filter').slideToggle();
        $(this).toggleClass('active');
    });
    $('.b-select__title').on('click', function() {
        $(this).parent().find('.select2-container').slideToggle();
        $(this).toggleClass('active');
    });
});
