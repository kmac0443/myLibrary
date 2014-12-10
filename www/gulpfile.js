var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');

// Compile sass files into CSS.
gulp.task('styles', function() {
	return gulp.src('./sass/style.sass')
		.pipe(sass({sourceComments: 'map'}))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./public/stylesheets'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('./sass/**', ['styles']);
});

// Default Task
gulp.task('default', ['styles', 'watch']);
