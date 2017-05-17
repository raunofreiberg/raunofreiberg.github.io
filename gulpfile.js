var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src('scss/**/*.scss')
    .pipe(sass())
    .on('error', (err) => {
      console.log(err.toString());

      this.emit('end');
    })
    .pipe(gulp.dest('css'));
});


gulp.task('watch', () => {  
  gulp.watch('scss/**/*.scss', ['sass']);
})


// define the default gulp task
gulp.task('default', ['sass', 'watch']);