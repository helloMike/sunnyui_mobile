/**
 * Created by Administrator on 2016/2/29.
 */
//require config
require.config({
    paths:{
        "jquery":"base/jquery.min",
        "jquery.easing":"base/jquery.easing.1.3",
        "about_us_module":"modules/about_us_module",
        "hammerjs":"base/hammer",
        "jhammer":"base/jquery.hammer"
    },
    shim:{
        "jquery.easing":{
            deps:["jquery"]
        },
      "about_us_module":{
          exports:"about_us",
          deps:["jquery","jquery.easing","hammerjs","jhammer"]
      }
    }
});
//require function
require(["about_us_module"],function(about_us){
    //list_button�ĵ�� ��ѹ�¼�
    about_us.show_nav();
    //nav���ݵĵ�� ��ѹ�¼�
    about_us.nav_tab();

});