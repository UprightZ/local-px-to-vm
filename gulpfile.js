/*
 * @Author: zhouziyan
 * @Date: 2018-09-20 18:04:07
 * @Last Modified by: veneno.zhou
 * @Last Modified time: 2019-11-05 14:37:14
 */

const gulp = require('gulp');
const uncss = require('postcss-uncss');
const base64 = require('gulp-base64');
const htmlBase64 = require('gulp-inline-image-html');
const postcss = require('gulp-postcss');
const pxtoviewport = require('postcss-px-to-viewport');

gulp.task('compile-css', () => {
    const postcssPlugins = [
        // uncss({ html: ['src/**/*.html'] }),
        pxtoviewport({
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines'],
            minPixelValue: 1,
            mediaQuery: false,
        }),
    ];
    return gulp.src('src/**/*.css')
        .pipe(postcss(postcssPlugins))
        .pipe(base64())
        .pipe(gulp.dest('dist'));
});

gulp.task('html', () => gulp.src('src/**/*.html')
    .pipe(htmlBase64('src/image'))
    .pipe(gulp.dest('dist')));

gulp.task('js', () => gulp.src('src/**/*.js')
    .pipe(gulp.dest('dist')));

gulp.task('image', () => gulp.src('src/image/**')
    .pipe(gulp.dest('dist/image')));

gulp.task('auto', () => {
    gulp.watch('src/**/*.css', ['compile-css']);
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/image/**', ['image']);
});

gulp.task('default', ['html', 'image', 'js', 'compile-css', 'auto']);
