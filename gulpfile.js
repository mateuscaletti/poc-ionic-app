var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
	controllers: ['./www/js/controllers/**/*.js']
	, services: ['./www/js/services/**/*.js']
	, models: ['./www/js/models/**/*.js']
	, app: ['./www/js/app/**/*.js']
};

gulp.task('default', ['controllers', 'services', 'models', 'app', 'watch']);

gulp.task('controllers', function() {
    return gulp.src(paths.controllers)
      	.pipe(concat('controllers.js'))
      	.pipe(uglify())
        .pipe(gulp.dest('./www/js/'));
});

gulp.task('services', function() {
    return gulp.src(paths.services)
      	.pipe(concat('services.js'))
      	.pipe(uglify())
        .pipe(gulp.dest('./www/js/'));
});

gulp.task('models', function() {
    return gulp.src(paths.models)
      	.pipe(concat('models.js'))
      	.pipe(uglify())
        .pipe(gulp.dest('./www/js/'));
});

gulp.task('app', function() {
    return gulp.src(paths.app)
      	.pipe(concat('app.js'))
      	.pipe(uglify())
        .pipe(gulp.dest('./www/js/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.controllers, ['controllers', 'services', 'models', 'app']);
});
