var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
const autoprefixer = require('gulp-autoprefixer');
var fontmin = require('gulp-fontmin');

// sass compilation

gulp.task('sass', function() {
    return gulp.src('app/css/**/*.scss')
        .pipe(sass()) // используем gulp-sass
        .pipe(gulp.dest('app/css'))
});

// watch 

gulp.task(
    'watch',
    gulp.series('sass', function(cb) {
        gulp.watch('app/css/**/*.scss', gulp.series('sass'));
        cb();
    })
);

//

gulp.task('useref', function() {

    return gulp.src('app/*.html')
        .pipe(useref())
        // Минифицируем только CSS файлы
        .pipe(gulpif('*.css', minifyCSS()))
        // Uglifies only if it's a Javascript file
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist'))
});
