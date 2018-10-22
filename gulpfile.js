const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');


// Lint Task--If there are any errors, it reports them to the console.
gulp.task('lint', () => {
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// Compile Project Lingo SASS files to CSS
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
      .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('./src/css'))
      .pipe
      
      ;
});

// Autoprefixer CSS & minify
gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist/css'));
});

// Concatenate & Minify Project Lingo JS files
gulp.task('scripts', () => {
    return gulp.src('/src/js/*.js')
        .pipe(concat('build.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('build.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});
// Compress all Project Lingo image files
gulp.task('compress-images', () => {
     gulp.src('./src/assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets'))
});
// Watch Files For Changes
gulp.task('watch', () => {
    // JavaScript changes
    gulp.watch('./src/js/*.js', ['lint', 'scripts']);
    // Sass changes
    gulp.watch('./src/scss/*.scss', ['sass']);
    // CSS changes
    gulp.watch('./src/css/*.scss', ['css']);
    // Image changes
    gulp.watch('./src/assets/*', ['compress-images']);
});
// Run Project Lingo Task
gulp.task('lingo', ['sass', 'css', 'scripts', 'compress-images', 'watch']);