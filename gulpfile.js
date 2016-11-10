var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src('images/*.{jpg,png}')
    .pipe($.responsive({
      'logo.jpg' : [
        {
          width:200
        }, {
        width:200*2,
        rename: 'logo_2x.jpg'
        }
      ]
    }))
    .pipe(gulp.dest('dist'));

});