var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var path = require('path');

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src('js/src/app.js')
    	.pipe(browserify({
          insertGlobals : false,
          debug : !gulp.env.production
        }))
        .pipe(uglify())
    .pipe(gulp.dest('js/dist'));
});

gulp.task('css',function() {

  gulp.src('./css/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));

});


gulp.task('default',['scripts','css']);