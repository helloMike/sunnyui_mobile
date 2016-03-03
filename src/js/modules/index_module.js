/**
 * Created by Administrator on 2016/2/28.
 */
define(function(){
    var DEFAULT_WIDTH = 320,// 画布的默认宽度
        ua = navigator.userAgent.toLowerCase(); // 根据 user agent 的信息获取浏览器信息
    //设定安卓机的viewport的宽度
    var android_viewport = function(){
        if (ua.indexOf("android") !== -1 || 1){
            $('meta[name="viewport"]').attr('content',
                'width='+ DEFAULT_WIDTH+'px');
        }
    }

    var press = function() {
        $('.main_index li').hammer().bind('press tap', function () {
            $(this).css("backgroundColor", "rgba(0,0,0,0.5)")
                .siblings().css("backgroundColor", "transparent");
        })
    }
    return {
       press:press,
        android_viewport : android_viewport
    }
})