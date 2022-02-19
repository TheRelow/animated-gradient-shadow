var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create(),
        concat = require('gulp-concat');

gulp.task('sass', function() {
	return gulp.src(['app/sass/**/*.+(scss|sass)','!app/sass/**/not.+(scss|sass)'])
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});

gulp.task('js', function() {
    return gulp.src(['app/js/*.+(js)'], {sourcemaps: true})
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('app/dist/js', { sourcemaps: true }))
});

gulp.task('browser-sync', function(done) { 
  browserSync.init({
    server: {
      baseDir: './app/'
    },
    notify: false
  });
  
  browserSync.watch('app/').on('change', browserSync.reload);
  
  done()
});	



gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.+(scss|sass)', gulp.series ('sass'));
	gulp.watch('app/js/*.+(js)', gulp.series ('js'));
});

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'js'))