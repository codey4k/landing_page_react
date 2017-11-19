import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'

gulp.task('sass',()=>{
    gulp.src('./src/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./src/'))
})

gulp.task('default',()=>{
    gulp.watch('./src/**/*.sass',['sass'])
})