// JavaScript Document
$(function () {
    "use strict";
    var ojbect = {
        init: function () {
            this.sliderThumb();
            this.blog();
            this.res();
        },
        sliderThumb: function () {
            $('.slider_main').slick({
                autoplay: true,
                speed: 300,
                slidesToShow: 1,
                arrows: false,
                fade: true,
                cssEase: 'linear'

            });

        },
        blog: function () {

            $.ajax({
                'url': 'news/_custom/?limit=15',
                'dataType': 'jsonp',
                'success': function (json) {

                    $.each(json.data, function (i, val) {
                        var $div = $('<li></li>').html(
                            '<span>' + val.date + '</span>' +
                            '<a href="news/' + val.url + '">' + val.title + '</a>');

                        $div.appendTo('.idx_blog dd ul');

                    });

                }
            });
        },
        res: function () {
            $(window).on("load resize", function () {

                var s = $(window).width();
                if (s >= 1024 && s <= 1400) {
                    $('.idx_list02 li:nth-child(2)').css({
                        right: 72
                    });
                    $('.idx_list02 li:nth-child(4)').css({
                        right: 84
                    })

                } else {
                    $('.idx_list02 li:nth-child(2)').removeAttr('style');
                     $('.idx_list02 li:nth-child(4)').removeAttr('style');

                }
            });
        },
    };
    ojbect.init();
});
