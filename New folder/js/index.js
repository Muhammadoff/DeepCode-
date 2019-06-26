    // first Js
    $(document).ready(function() {

        $('.carousel').carousel({
            slidesToShow: 12,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
        });

    });

    // second Js

    // Vertical sliider
    var titleMain = $("#animatedHeading");
    var titleSubs = titleMain.find("slick-active");

    if (titleMain.length) {

        titleMain.slick({
            autoplay: true,
            arrows: false,
            dots: false,
            centerMode: true,
            slidesToShow: 3,
            centerPadding: "5px",
            draggable: false,
            infinite: true,
            pauseOnHover: false,
            swipe: false,
            touchMove: false,
            vertical: true,
            speed: 1000,
            autoplaySpeed: 2000,
            useTransform: true,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            adaptiveHeight: true,
            arrowsNav: true,
            arrowsNavAutoHide: false


        });

        // On init
        $(".slick-dupe").each(function(index, el) {
            $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
        });

        // Manually refresh positioning of slick
        titleMain.slick('slickPlay');


    };