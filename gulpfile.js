/**
 * Created by Administrator on 2016/2/25.
 */
//请求gulp基础库及相应文件插件
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');
//设定任务
//sass转换成css
gulp.task('sass',function(){
    var sassSrc = './src/sass/*.scss',
        sassDst = './src/css';
/*
    gulp.src(sassSrc)
        .pipe(sass())
        .pipe(gulp.dest(sassDst));
*/
    return sass(sassSrc)
          .pipe(gulp.dest(sassDst));
})

//执行任务
gulp.task('default',['sass']);