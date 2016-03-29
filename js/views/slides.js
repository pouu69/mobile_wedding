/**
 * Created by Park on 2016-03-28.
 */
var slides = (function(){

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
        },

        initSlippry : function(){
            $('#pictures-demo').slippry({
                // general elements & wrapper
                slippryWrapper: '<div class="sy-box pictures-slider" />', // wrapper to wrap everything, including pager

                // options
                adaptiveHeight: false, // height of the sliders adapts to current slide
                captions: false, // Position: overlay, below, custom, false
                responsive : true,
                // pager
                pager: false,

                // controls
                controls: false,
                autoHover: false,

                // transitions
                transition: 'kenburns', // fade, horizontal, kenburns, false
                kenZoom: 140,
                speed: 2000 // time the transition takes (ms)
            });
        }
    }
})();

