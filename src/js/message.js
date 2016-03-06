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
        //messageģ��
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
    //list_button�ĵ�� ��ѹ�¼�
    common.show_nav();
    //nav���ݵĵ�� ��ѹ�¼�
    common.nav_tab();
    //�趨html�������С������rem��λ
    common.set_html_fs();
    //���ӵ���¼�
    message.tap_link();
});
