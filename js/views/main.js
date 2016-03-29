/**
 * Created by Park on 2016-03-29.
 */
function scrollEvt(){
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 690) {
            $(".header-wrap").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header-wrap").removeClass("active");
        }
    });
}
