/**
 * Created by Administrator on 2016/2/25.
 */
//����gulp�����⼰��Ӧ�ļ����
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');
//�趨����
//sassת����css
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

//ִ������
gulp.task('default',['sass']);