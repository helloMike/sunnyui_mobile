/**
 * Created by Administrator on 2016/2/28.
 */
define(function(){
    var DEFAULT_WIDTH = 320,// ������Ĭ�Ͽ��
        ua = navigator.userAgent.toLowerCase(); // ���� user agent ����Ϣ��ȡ�������Ϣ
    //�趨��׿����viewport�Ŀ��
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