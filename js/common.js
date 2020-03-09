// JavaScript Document
$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
            this.smoothScroll();
            this.iconMenu();
            this.changeResize();
            this.gnaviFixed();
        },
        //totop
        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $("#totop").fadeIn();
                } else {
                    $("#totop").fadeOut();
                }
            });
            $("#totop a").click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        },
        smoothScroll: function () {
            $('a[href^="#"]').click(function () {

                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 135
                        }, 600);
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 100
                        }, 600);
                    }
                }
                return false;
            });
            $(window).load(function () {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 135
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 100
                        }, 600);
                    }
                }
            });

        },

        //sp gnavi
        iconMenu: function () {
            $('.icon_menu.open').click(function () {
                $('.icon_menu.closes').toggleClass('active');
                $('.icon_menu.open').fadeOut();
                $('#gnavi').slideToggle();
            });

            //butn closes
            $('.icon_menu.closes').click(function () {
                $('.icon_menu.closes').toggleClass('active');
                $('.icon_menu.open').fadeIn();
                $('#gnavi').slideToggle();
                $('#gnavi .sub').removeAttr('style');

                $('.gnavi_pc > li > span').removeClass('active');
            });

            //last close
            $('#gnavi .close').click(function () {
                $('#gnavi').slideUp(600);
                $('.icon_menu').removeClass('active');
            });

            $('#gnavi .has > span').click(function () {
                if ($(this).hasClass('flag')) {
                    $(this).toggleClass('active');
                    $(this).next('.sub').slideToggle();
                }

            });
            $(window).on("load resize", function () {

                var sw = $(window).width();
                $('.has > span').removeClass('active');

                if (sw > 640) {
                    $('.sub').removeAttr('style');
                    $('#gnavi .has > span').removeClass('flag');
                    $('.icon_menu').removeClass('active');
                    $('#gnavi').removeAttr('style');

                } else {

                    $('#gnavi .has > span').addClass('flag');

                }
            });


        },
        changeResize: function () {
            $(".sliderbar_fix").hide();
            $(window).bind('resize load', function () {
                var wscr = $(window).width();

                if (wscr > 640) {
                    $('.gnavi_pc').removeAttr('style');
                    $('.icon_menu').removeClass('active');

                } 

            });

            $(window).bind('resize load scroll', function () {
                var mainvi = $('#mainvisual').outerHeight();
                var pTop = $(this).scrollTop();
                var bottom= $('.sliderbar_fix').outerHeight();

                var ww = $(window).width();
                if (ww <= 640) {
                    if (pTop > mainvi) {
                        $(".sliderbar_fix").fadeIn();
                        $(".copyright").css({'margin-bottom':bottom + 10});

                    } else {
                        $(".sliderbar_fix").fadeOut();
                        $(".copyright").removeAttr('style');
                    }

                    /************/
                    var header = $("#header").position().top + $("#header").innerHeight();

                    var mainvi = $("#header").innerHeight();
                    $('#mainvisual').css({
                        'margin-top': mainvi
                    });


                } else {
                     $(".copyright").removeAttr('style');
                    $(".sliderbar_fix").hide();
                    $('#mainvisual').removeAttr('style');
                }
            });
        },
        gnaviFixed: function () {
            $(window).bind('resize load scroll', function () {
                var ww = $(window).width();
                var pTop = $(this).scrollTop();
                var header = $('#gnavi').position().top + $("#gnavi").outerHeight();

                if (ww > 640) {

                    if (pTop > header) {
                        $('#gnavi').addClass('fixed');

                    } else {
                        $('#gnavi').removeClass('fixed');

                    }
                } else {
                    $('#gnavi').removeClass('fixed');

                }
            });
        },
    };

    obj.init();
});
