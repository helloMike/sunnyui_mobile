/**
 * Created by Administrator on 2016/3/5.
 */
define(function(){
    var pretty = function(target){
        $(target).hammer().bind("tap",function(){
            $(this).css("transform","scale(1.1)").prettyPhoto({
                social_tools:false
            });
        })
    }
    return {
        pretty:pretty
    }
})