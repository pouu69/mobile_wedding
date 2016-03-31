/**
 * Created by Park on 2016-03-29.
 */
var bg = (function(){

    var closeBg = function(){
        $( '.bg-notify' ).fadeOut( "slow", function() {
            $('.bg-notify').hide();
            //$( '.bg-notify' ).unbind('touchstart');
        });
    }

    return {
        tabEvt : function(){
            $( '.bg-notify' ).click(function(e) {
                e.preventDefault();
                closeBg();
            });
        }
    }
})();

var pswp = (function(){
    return {
        initSwipebox : function(){
            $( '.swipebox' ).swipebox({
                removeBarsOnMobile : false,
                loopAtEnd : true
            });
        }
    }
})();
