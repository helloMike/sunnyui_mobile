/**
 * Created by Administrator on 2016/2/29.
 */
//require config
require.config({
    paths:{
        "jquery":"base/jquery.min",
        "jquery.easing":"base/jquery.easing.1.3",
        "about_us_module":"modules/about_us_module",
        "common_module":"modules/common_module",
        "hammerjs":"base/hammer",
        "jhammer":"base/jquery.hammer"

    },
    shim:{
        "jquery.easing":{
            deps:["jquery"]
        },
      "common_module":{
          exports:"common",
          deps:["jquery","jquery.easing","hammerjs","jhammer"]
      }


    }
});
//require function
require(["common_module"],function(common){
    //list_button�ĵ�� ��ѹ�¼�
    common.show_nav();
    //nav���ݵĵ�� ��ѹ�¼�
    common.nav_tab();
    //�趨html�������С������rem��λ
    common.set_html_fs();

});