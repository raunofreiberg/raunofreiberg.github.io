var gulp = require('gulp');
var sass = require('gulp-sass');
var slim = require("gulp-slim");

gulp.task('sass', () => {
  gulp.src('scss/**/*.scss')
    .pipe(sass())
    .on('error', (err) => {
      console.log(err.toString());

      this.emit('end');
    })
    .pipe(gulp.dest('css'));
});

gulp.task('slim', () => {
  gulp.src("./slim/*.slim")
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest("./portfolio/"));
});


gulp.task('watch', () => {
  gulp.watch('slim/**/*.slim', ['slim']);
  gulp.watch('scss/**/*.scss', ['sass']);
})


// define the default gulp task
gulp.task('default', ['sass', 'watch', 'slim']);