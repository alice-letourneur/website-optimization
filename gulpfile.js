// Include gulp
var gulp = require('gulp');

// Include plugins
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

//Optimize images
gulp.task('images', function() {
  return gulp.src(['src/img/*.jpg', 'src/img/*.png'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

//Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

//Minify HTML
gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

//Minify Javascript
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

 // Default Task
gulp.task('default', ['images','minify','minify-css','scripts']);