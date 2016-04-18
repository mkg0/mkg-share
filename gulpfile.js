gulp= require('gulp');
sass= require('gulp-sass');
sync = require('browser-sync').create();
plumber = require('gulp-plumber');
rename = require('gulp-rename');
babel = require('gulp-babel');
sourcemaps  = require('gulp-sourcemaps');
autoprefixer = require('gulp-autoprefixer');
uglify = require('gulp-uglify');
cleancss = require('gulp-clean-css');
base64 = require('gulp-base64');



gulp.task('sass',function () {
    return gulp.src('src/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(base64({
            baseDir: 'src',
            extensions: ['svg', 'png', /\.jpg#datauri$/i],
            exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
            maxImageSize: 8*1024, // bytes,
            deleteAfterEncoding: false,
            debug: true
        }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({stream:true}));
})

gulp.task('script',function () {
    return gulp.src(['src/*.js','src/*.es6'])
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(babel())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({stream:true}));
})


gulp.task('minify',function () {
    gulp.src('dist/mkg-share.js')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'))
    gulp.src('dist/mkg-share.css')
    .pipe(cleancss())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'))
})

gulp.task('html',function () {
    sync.reload();
})


gulp.task('default',function () {
    serve();
    gulp.watch('src/*.scss',['sass']);
    gulp.watch(['src/*.js','src/*.es6'],['script','minify']);
    gulp.watch('*.html',['html']);
});


function serve() {
    sync.init({
        server: {
          baseDir: './'
        },
    })
}
