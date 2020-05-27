
var concat = require('gulp-concat');
var gulp = require('gulp');

gulp.task('bundle-js', function() {
    return gulp.src('src/**/*.js')
      .pipe(concat('sipmlBundle.js'))
      .pipe(gulp.dest('dist/'));
  });