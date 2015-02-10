var gulp = require('gulp'),
	minify = require('gulp-minify-html'),
	connect = require('gulp-connect'),
	open = require('gulp-open');

gulp.task('html', function () {
  var opts = {comments:true,spare:true};

  gulp.src('./leadpages-template/index.html')
    .pipe(connect.reload())
});
