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
        //demo模块
        "demo_module":"modules/demo_module",
        "prettyPhoto":"base/jquery.prettyPhoto"               //点击案例作品图片显示图片的模块
    },
    shim:{
        "jquery.easing":{
          deps:["jquery"]
        },
        "common_module":{
            exports:"common",
            deps:["jquery","jquery.easing","hammerjs","jhammer"]
        },
        "demo_module":{
            exports:"demo",
            deps:["jquery","hammerjs","jhammer","prettyPhoto"]
        }
    }
});
//require function
require(["common_module","demo_module"],function(common,demo){
    //list_button的点击 按压事件
    common.show_nav();
    //nav内容的点击 按压事件
    common.nav_tab();
    //设定html的字体大小来调节rem单位
    common.set_html_fs();
    //图片点击事件
    demo.pretty("a[rel=prettyPhoto]");
});
