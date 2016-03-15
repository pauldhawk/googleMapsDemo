var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync')

// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('public/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// watch files for changes and reload
gulp.task('serve', function() {
    browserSync({
        server: { baseDir: './public' }
    });
    //gulp.task('js-watch', browserSync.reload);
    gulp.watch(['public/*.html', 'public/*.js','public/geojson/*.json'],
        browserSync.reload);
});

// define the default task and add the watch task to it
gulp.task('default', ['serve']);
