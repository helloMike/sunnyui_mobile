/**
 * Created by Administrator on 2016/2/27.
 */
//require config
require.config({
    paths:{
        "jquery":"base/jquery.min",                      //jquery module
        "hammerjs":"base/hammer" ,                         //the path of hammer.js
        "jquery.hammer":"base/jquery.hammer" ,           //the path of jquery.hammer.js
        "index_module":"modules/index_module"                //the path of touch module
    },
    shim:{
        "index_module":{
            exports:"index",
            deps:["jquery","hammerjs","jquery.hammer"]
        }
    }
})
require(["index_module"],function(index){
 //define the width of the device viewport
    index.android_viewport();
//touch event
    index.press();
})

