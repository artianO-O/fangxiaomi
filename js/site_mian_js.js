$(function () {
    $(window).scroll(function(){if($(document).scrollTop()>160){
        $('.top_btn').css("display","block");
    }else{
        $('.top_btn').css("display","none");
    }});
    $('.top_btn').click(function(){
        var timer=setInterval(function(){
            if($(document).scrollTop()==0){
                clearInterval(timer);
            }else{
                $(document).scrollTop($(document).scrollTop()-10);
            }
        },5);
    });
    $(".site_category_list li").hover(
        function () {
            $(this).children(".children2_box").css("display","block");
        },
        function () {
        $(this).children(".children2_box").css("display","none");
    }
    )
    $(".search_text").focus(
        function () {
            $(".search_hot_word").fadeOut();
            $(".search_text,.search_btn").css("border","0.5px #ff6700 solid");
            $(".search_hide_hot_word").css("display","block");
        }
    )
    $(".search_text").blur(
        function () {
            $(".search_hot_word").fadeIn();
            $(".search_hide_hot_word").css("display","none");
            $(".search_text,.search_btn").css("border","1px solid #e0e0e0");
        }
    )


    $(".header_list li,.children_box").hover(
        function () {
            $(".children_box .children_list").css("display","block");
            $(".children_box").css({"height":"229px"});
            $(".children_box").addClass("add_border")
       },
        function () {
            $(".children_box").css({"height":"0px"});
            $(".children_box").removeClass("add_border");
            $(".children_box .children_list").css({"display":"none"});
        })

//    倒计时
    t = setInterval(function () {
        if($("#second_time").html()==0 && $("#minus_time").html()==0 && $("#hour_time").html()==0){
            clearInterval(t);
            $(".page_main_box").fadeOut();
        }else{
            if($("#second_time").html()==0){
                if($("#minus_time").html()==0){
                    set_hour();
                    $("#minus_time").html(60)
                }
                set_minus();
                $("#second_time").html(60)
            }
            set_sec();
        }
    },1000);



    //这里要动态获取li的个数
    for(var i = 0;i<15;i++){
        if(i%4==3){
            //加变量可以用 "+变量+" 的形式加
            $(".swiper-wrapper li:eq("+i+")").css("margin-right","0px");
        }
    }

    //小米秒杀之俩个按钮
    //问题第四个li是没有margin-right要想办法通过js语法去除
    $(".flashsale_next").click(function () {
        var position = $(".swiper-wrapper").css("margin-left");
        position = parseInt(position) - 978 + "px"
        $(".swiper-wrapper").css("margin-left",position);
        if(parseInt(position)<9000){
            $(this).css("color","#e0e0e1");
            position = "9000px"
        }
    })
    $(".flashsale_prev").click(function () {
        var position = $(".swiper-wrapper").css("margin-left");
        position = parseInt(position) + 978 + "px"
        if(parseInt(position)>0){
            $(this).css("color","#e0e0e1");
            position = "0px"
        }
        $(".swiper-wrapper").css("margin-left",position);
    })

//    单击播放视频功能
    $(".video_item a").click(function () {
        $(".bofang").css("display","block");
    })
    $(".bofang .glyphicon-remove").click(function () {
        $(this).parent().parent().css("display","none");
    })

});


set_sec = function () {
    var num_time = $("#second_time").html();
    num_time--;
    if(num_time<10){
        num_time = "0" + num_time
    }
    $("#second_time").html(num_time);
};
set_hour = function () {
    var num_time = $("#hour_time").html();
    num_time--;
    if(num_time<10){
        num_time = "0" + num_time
    }
    $("#hour_time").html(num_time);
};
set_minus = function () {
    var num_time = $("#minus_time").html();
    num_time--;
    if(num_time<10){
        num_time = "0" + num_time
    }
    $("#minus_time").html(num_time);
}





