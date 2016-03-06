/**
 * Created by Administrator on 2016/2/29.
 */
//require config

require.config({
    paths:{
        //����ģ��
        "jquery":"base/jquery.min",
        "jquery.easing":"base/jquery.easing.1.3",
        "about_us_module":"modules/about_us_module",
        "common_module":"modules/common_module",
        "hammerjs":"base/hammer",
        "jhammer":"base/jquery.hammer",
        //��ϵ����ģ��&�ٶȵ�ͼ
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
    //list_button�ĵ�� ��ѹ�¼�
    common.show_nav();
    //nav���ݵĵ�� ��ѹ�¼�
    common.nav_tab();
    //�趨html�������С������rem��λ
    common.set_html_fs();
    //�ٶȵ�ͼ
    coorperate.map();

});
