'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var gif = require('gulp-if');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');

gulp.task('styles', function() {
    return gulp.src(['styles/*.less', 'styles/*.css', '!styles/*.min.css'])
        .pipe(less())
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('styles'))
});

gulp.task('scripts', function() {
    return gulp.src(['scripts/*.coffee', 'scripts/*.js', '!scripts/*.min.js'])
        .pipe(gif(/\.coffee$/, coffee()))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('scripts'))
});

gulp.task('default', ['styles', 'scripts'], function() {
    return gulp.src("")
    .pipe(notify({ message: 'Built' }));
});

gulp.task('serve', function() {
    browserSync({
        server: {
            notify: false,
            baseDir: "./"
        }
    });

    gulp.watch(['*.html'], browserSync.reload);
    gulp.watch(['styles/*.{less,css}'], ['styles', browserSync.reload]);
    gulp.watch(['scripts/*.{js,coffee}'], ['scripts', browserSync.reload]);
});
