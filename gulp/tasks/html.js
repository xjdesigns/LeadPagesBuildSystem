var gulp = require('gulp'),
	minify = require('gulp-minify-html'),
	connect = require('gulp-connect');

gulp.task('html', function () {
  var opts = {comments:true,spare:true};

  // gulp.src('./html/index.html')
  // 	.pipe(minify(opts))
  // 	.pipe(gulp.dest('./leadpages-template'))

  gulp.src('./leadpages-template/index.html')
    .pipe(connect.reload());
});
