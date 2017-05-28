// Include gulp
var gulp = require('gulp');

// Include plugins
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var critical = require('critical');

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

// Generate & Inline Critical-path CSS
gulp.task('critical-index', ['minify','minify-css'], function () {
  critical.generate({
      inline: true,
      base: './',
      src: 'dist/index.min.html',
      css: ['src/css/style.css'],
      dest: 'dist/index.html',
      width: 320,
      height: 480,
      minify: true
  });
});

//Minify HTML
gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(rename({suffix: '.min'}))
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

// Copy Views folder
gulp.task('copy-html', function(){
  return gulp.src('src/views/*.html')
  .pipe(gulp.dest('dist/views'));
});

gulp.task('copy-css', ['copy-html'], function(){
  return gulp.src('src/views/css/*.css')
  .pipe(gulp.dest('dist/views/css'));
});

gulp.task('copy-js', ['copy-html'], function(){
  return gulp.src('src/views/js/*.js')
  .pipe(gulp.dest('dist/views/js'));
});

gulp.task('copy-img', ['copy-html'], function(){
  return gulp.src(['src/views/images/*.jpg', 'src/views/images/*.png'])
  .pipe(gulp.dest('dist/views/images'));
});

 // Default Task
gulp.task('default', ['images','critical-index','minify','minify-css','scripts','copy-html','copy-css','copy-js','copy-img']);
