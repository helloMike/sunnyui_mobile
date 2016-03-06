/**
 * Created by Administrator on 2016/2/29.
 */
//require config

require.config({
    paths:{
        //公共模块
        "jquery":"base/jquery.min",
        "jquery.easing":"base/jquery.easing.1.3",
        "common_module":"modules/common_module",                    //顶部导航栏点击事件公用模块
        "hammerjs":"base/hammer",                                   //touch事件模块hammer
        "jhammer":"base/jquery.hammer",                            //hammer的jquery插件模块
        //message模块
        "message_module":"modules/message_module"
    },
    shim:{
        "jquery.easing":{
            deps:["jquery"]
        },
        "common_module":{
            exports:"common",
            deps:["jquery","jquery.easing","hammerjs","jhammer"]
        },
        "message_module":{
            exports:"message",
            deps:["jquery","hammerjs","jhammer"]
        }
    }
});
//require function
require(["common_module","message_module"],function(common,message){
    //list_button的点击 按压事件
    common.show_nav();
    //nav内容的点击 按压事件
    common.nav_tab();
    //设定html的字体大小来调节rem单位
    common.set_html_fs();
    //连接点击事件
    message.tap_link();
});
