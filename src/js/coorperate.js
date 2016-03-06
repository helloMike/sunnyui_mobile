/**
 * Created by Administrator on 2016/2/29.
 */
//require config

require.config({
    paths:{
        //公共模块
        "jquery":"base/jquery.min",
        "jquery.easing":"base/jquery.easing.1.3",
        "about_us_module":"modules/about_us_module",
        "common_module":"modules/common_module",
        "hammerjs":"base/hammer",
        "jhammer":"base/jquery.hammer",
        //联系合作模块&百度地图
        "baidu_map_base":"http://api.map.baidu.com/getscript?v=1.1&ak=&services=true&t=20130716024058",
        "baidu_map":"base/baidu_map",
        "coorperate_module":"modules/coorperate_module"
    },
    shim:{
        "jquery.easing":{
            deps:["jquery"]
        },
        "common_module":{
            exports:"common",
            deps:["jquery","jquery.easing","hammerjs","jhammer"]
        },
        "coorperate_module":{
            exports:"coorperate",
            deps:["jquery","baidu_map_base","baidu_map"]
        },
        "baidu_map":{
            exports:"baidu_map",
            deps:["baidu_map_base"]
        }
    }
});
//require function
require(["common_module","coorperate_module"],function(common,coorperate){
    //list_button的点击 按压事件
    common.show_nav();
    //nav内容的点击 按压事件
    common.nav_tab();
    //设定html的字体大小来调节rem单位
    common.set_html_fs();
    //百度地图
    coorperate.map();

});
