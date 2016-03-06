/**
 * Created by Administrator on 2016/3/6.
 */
define(function(){
    var tab_link = function(){
        $(".item_message>h1>a").hammer().bind("tap",function(event){
            event.preventDefault();
            $(this).css("color","#007EFF");
            window.location.href=$(this).attr("href");
        })
        $(".item_message_content>a").hammer().bind("tap",function(event){
            event.preventDefault();
            $(this).find("img").css("transform","scale(1.1)");
            window.location.href=$(this).attr("href");
        })
    }
    return {
        tap_link:tab_link
    }
})