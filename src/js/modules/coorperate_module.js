/**
 * Created by Administrator on 2016/3/3.
 */
/*
require.config({
    paths:{
        "baidu_map":"../base/baidu_map",
        "baidu_map_base":"http://api.map.baidu.com/api?key=&v=1.1&services=true"
    },
    shim:{
        "baidu_map":{
            exports:"baidu_map",
            deps:["baidu_map_base"]
        }
    }
})
define(["baidu_map"],function(){
    var map = initMap();
    return {
        map:map
    }
})
*/
define(["baidu_map"],function(baidu_map){
    var map = initMap;
        return {
            map:map
        }
    }
)
