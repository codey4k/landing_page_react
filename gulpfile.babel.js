const gulp= require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer')

gulp.task('sass',()=>{
    gulp.src('./src/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./src/'))
})

gulp.task('default',()=>{
    gulp.watch('./src/**/*.sass',['sass'])
})