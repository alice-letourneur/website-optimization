// Include gulp
var gulp = require('gulp');
// Include plugins

var imagemin = require('gulp-imagemin');

//Optimize images
gulp.task('images', function() {
  return gulp.src(['src/img/*.jpg', 'src/img/*.png'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

 // Default Task
gulp.task('default', ['images']);