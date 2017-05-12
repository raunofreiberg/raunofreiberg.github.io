// gulpfile.js

// load gulp
var gulp = require('gulp');

// load gulp-sass plugin
var sass = require('gulp-sass');

// define the gulp "task" that will compile your sass
/* We make a few assumptions here.  Change as your project requires:
*  1. Your sass files are in a scss/ directory at the root of your project
*  2. Your sass files using the "Sassy CSS" syntax, and thus end in .scss
*  3. Your CSS stylesheets will live in the stylesheets/ directory at the root of your project
*/
gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass())
    .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
    .pipe(gulp.dest('css'));
});

// define the gulp task that will watch for changes in your sass
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});

// define the default gulp task
gulp.task('default', ['sass', 'watch']);