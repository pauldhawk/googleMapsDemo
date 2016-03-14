
// Dependencies
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

// Task
gulp.task('reload', function() {
	// listen for changes
	livereload.listen();
	// configure nodemon
	nodemon({
		// the script to run the app
		script: 'server.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('server.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
	})
});

gulp.task('default', ['reload']);
