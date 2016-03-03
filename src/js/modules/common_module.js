/**
 * Created by Administrator on 2016/3/3.
 */
define(function(){

    //变量的定义
    var toggle = false,             //判断导航部分的显示隐藏，false为隐藏，true为显示
        height ="100vh",            //窗口重新改变的高度
        tap_field_height = null,    //tap_field的高度，用于点击隐藏导航栏
        $list_button = $(".list_button"),              //顶部显示隐藏导航按钮
        $nav_button = $(".list_button_02"),                 //底部隐藏导航部分按钮
        elements = [$list_button,$nav_button],        //导航按钮集合
        $nav_button = $("nav li");                  //导航部分的按钮

    //函数方法的定义
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
    //导航点击变换颜色方法
    var nav_tab = function(){
        $nav_button.each(function(){
            $(this).hammer().bind("tap press",function(){
                $(this).css("backgroundColor","#188AFE")
                    .siblings().css("backgroundColor","#4AA2FD");
            })
        })
    }
    //返回函数方法
    return {
        show_nav:show_nav,
        nav_tab:nav_tab
    }
})
