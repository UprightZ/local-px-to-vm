/*
 * @Author: zhouziyan
 * @Date: 2018-09-20 18:04:07
 * @Last Modified by: veneno.zhou
 * @Last Modified time: 2018-09-20 18:15:26
 */

const gulp = require('gulp');
const uncss = require('postcss-uncss');
const postcss = require('gulp-postcss');
const pxtoviewport = require('postcss-px-to-viewport');

gulp.task('compile-css', () => {
    const postcssPlugins = [
        uncss({ html: ['src/**/*.html'] }),
        pxtoviewport({
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines'], 
            minPixelValue: 1,
            mediaQuery: false
        })
    ];
    return gulp.src('src/**/*.css')
        .pipe(postcss(postcssPlugins))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('image', () => {
    return gulp.src('src/image/*')
        .pipe(gulp.dest('dist/image'));
});


gulp.task('auto', () => {
    gulp.watch('src/**/*.css', ['compile-css'])
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/image/*', ['image']);
});

gulp.task('default', ['html', 'image', 'compile-css', 'auto']);
