/**
 * Created by Park on 2016-03-29.
 */
function scrollEvt(){
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 220) {
            $(".header-wrap").addClass("active");
            $('.header .header-wrap .header-li-main span').addClass('active');
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header-wrap").removeClass("active");
            $('.header .header-wrap .header-li-main span').removeClass('active');

        }
    });
}
