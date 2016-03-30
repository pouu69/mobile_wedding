/**
 * Created by Park on 2016-03-28.
 */
$(document).ready(function(){
    var page  = location.href.split("/").pop();
    
    fix_menu.init();
    if(page === "gallery"){
        pswp.initSwipebox();
        bg.tabEvt();
    }else if(page === 'guest'){
        guest.init();
    }else if(page === ''){
        slides.initSwiper();
        slides.initSlippry();
        scrollEvt();
    }
});