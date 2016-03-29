/**
 * Created by Park on 2016-03-29.
 */
var fix_menu = (function(){
    var menu_open = function(){
        $('#fix_menu_icon').click(function(){
                $('.fix_menu').toggleClass('active');
                $('.fix_menu_list').toggleClass('active');
        });
    }

    return {
        init : function(){
            menu_open();
        }
    }
})();

