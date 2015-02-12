var gulp = require('gulp'),
	open = require('gulp-open');

gulp.task('open', function(){
	var opts = {
		url: 'http://localhost:8080',
		app: 'google chrome'
	};
	gulp.src('./leadpages-template/index.html')
	.pipe(open('', opts));
});