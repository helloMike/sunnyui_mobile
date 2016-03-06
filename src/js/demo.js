/**
 * Created by Administrator on 2016/2/29.
 */
//require config

require.config({
    paths:{
        //����ģ��
        "jquery":"base/jquery.min",
        "jquery.easing":"base/jquery.easing.1.3",
        "common_module":"modules/common_module",                    //��������������¼�����ģ��
        "hammerjs":"base/hammer",                                   //touch�¼�ģ��hammer
        "jhammer":"base/jquery.hammer",                            //hammer��jquery���ģ��
        //demoģ��
        "demo_module":"modules/demo_module",
        "prettyPhoto":"base/jquery.prettyPhoto"               //���������ƷͼƬ��ʾͼƬ��ģ��
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
    //list_button�ĵ�� ��ѹ�¼�
    common.show_nav();
    //nav���ݵĵ�� ��ѹ�¼�
    common.nav_tab();
    //�趨html�������С������rem��λ
    common.set_html_fs();
    //ͼƬ����¼�
    demo.pretty("a[rel=prettyPhoto]");
});
