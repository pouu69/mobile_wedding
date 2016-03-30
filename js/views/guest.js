/**
 * Created by Park on 2016-03-30.
 */
var guest = (function(){
    var page = 1;
    var datas = null;

    var source = $('#comment_template').html();
    var template = Handlebars.compile(source);

    var registerData = function(){
        var name = $('#name').val();
        var content = $('#content').val();
        
        if(!name || name === '' || name.length === 0){
            alert('이름을 입력해주세요.');
            return;
        }

        if(!content || content === '' || content.length === 0){
            alert('인사말을 입력해주세요.');
            return;
        }
        
        var sendData = {
            name : name,
            content : content
        };
        
        $.ajax({
            // type을 설정합니다.
            type : 'POST',
            url : "/rest_comments",
            data : sendData,
            success : function (data, textStatus) {
               console.log(data,textStatus);
                alert('등록되었습니다. 감사합니다.');

            },
            error : function(jqXHR,textStatus){
                alert('실패하였습니다..');
            }
        });
    };

    var getData = function(){
        var d = $.Deferred();

        $.ajax({
            // type을 설정합니다.
            type : 'GET',
            url : "/rest_comments?page="+page,
            success : function (data, textStatus) {
                page++;
                d.resolve();
            },
            error : function(jqXHR,textStatus){
                d.reject();
            }
        });

        return d.promise();
    };

    var loadData = function(){
        $.when(
            getData()
        ).done(function(){
            var commentHtml = template(datas);
            $('.comment_container').append(commentHtml);
        });
    };

    var registerEvt = function(){
        $('#register').click(function(e){
            e.preventDefault();
            registerData();
        });
    };


    return {
        init : function(){
            registerEvt();
            loadData();
        }
    };
})();