var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
//This is a simple, sample task
gulp.task('task-name', function() {
	console.log('Helllllooo');
});

// I want to compile 
//any .scss files
//in /app/scss
//and put them
//into /dist/css
gulp.task('sass', function() {
	return gulp.src('source-files')
	.pipe(sass())
	.pipe(gulp.dest('destination'));

});
gulp.task('concatenate', function() {
	return gulp.src('app/css/*.css')
	.pipe(concat('all.css'))
	.pipe(gulp.dest('dist/css/'));
});

gulp.task('cleanup', function() {
	return gulp.src(['app/*css', 'dist/css/*.css'] {read: false})
});


//I want a cleanup task!

// I also want to chain sass and concatenate task togther

//Then I want to watch the scss folder and run automatically
// when files