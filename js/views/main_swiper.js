/**
 * Created by Park on 2016-03-28.
 */
var main_swiper = (function(){

    return {
        initSwiper : function(){
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                speed:200,
                effect : 'fade',
                autoplay: 2000,
                loop:true
            });

            return swiper;
        }
    }
})();
