/**
 * Created by Administrator on 2016/3/3.
 */
define(function(){

    //�����Ķ���
    var toggle = false,             //�жϵ������ֵ���ʾ���أ�falseΪ���أ�trueΪ��ʾ
        height ="100vh",            //�������¸ı�ĸ߶�
        tap_field_height = null,    //tap_field�ĸ߶ȣ����ڵ�����ص�����
        $list_button = $(".list_button"),              //������ʾ���ص�����ť
        $nav_button = $(".list_button_02"),                 //�ײ����ص������ְ�ť
        elements = [$list_button,$nav_button],        //������ť����
        $nav_button = $("nav li");                  //�������ֵİ�ť

    //���������Ķ���
    var show_nav = function() {
        for(var i=0;i<elements.length;i++){
            elements[i].hammer().bind('tap', function () {
                if (!toggle) {
                    $(".list_button").find("span").addClass('active');
                    $("nav").height(height);
                    tap_field_height = $("nav").height() - 170;
                    $(".tap_field").height(tap_field_height);
                    $(".tap_field").hammer().bind("tap press",function(){
                        $(".list_button").find("span").removeClass('active');
                        $("nav").height(0);
                    });
                    $(window).bind("resize",function(){
                        if(toggle){
                            $("nav").height(height);
                            tap_field_height = $("nav").height() - 170;
                            $(".tap_field").height(tap_field_height);
                        }

                    });
                    toggle = true;
                } else {
                    $(".list_button").find("span").removeClass('active');
                    $("nav").height(0);
                    $(window).bind("resize",function(){
                        if(!toggle){
                            $("nav").height(0);
                        }
                    });
                    toggle = false;
                }
            });
        }
    }
    //��������任��ɫ����
    var nav_tab = function(){
        $nav_button.each(function(){
            $(this).hammer().bind("tap press",function(){
                $(this).css("backgroundColor","#188AFE")
                    .siblings().css("backgroundColor","#4AA2FD");
            })
        })
    }
    //���غ�������
    return {
        show_nav:show_nav,
        nav_tab:nav_tab
    }
})
