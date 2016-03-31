/**
 * Created by Park on 2016-03-30.
 */
var guest = (function(){
    var page = 1;
    var datas = null;


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
                window.location.reload(true);
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
                if(data.total_count < page*10){
                    $('.more_btn').hide();
                }else{
                    $('.more_btn').show();
                }
                page++;
                d.resolve(data.data);
            },
            error : function(jqXHR,textStatus){
                $('.more_btn').hide();

                d.reject();
            }
        });

        return d.promise();
    };

    var loadData = function(){
        $.when(
            getData()
        ).done(function(ret){
            var source = $('#comment_template').html();
            var template = Handlebars.compile(source);
            var commentHtml = template(ret);
            $('.comment_container').append(commentHtml);
        });
    };

    var registerEvt = function(){
        $('#register').click(function(e){
            e.preventDefault();
            registerData();
        });

        $('.more_btn').click(function(e){
            e.preventDefault();
            loadData();
        })
    };
    return {
        init : function(){
            registerEvt();
            loadData();
        }
    };
})();