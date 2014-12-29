var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

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