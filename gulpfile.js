"use strict"

const gulp = require("gulp")
const connect = require("gulp-connect")
const root = "public"

const plugins =
[
    require("postcss-nested-props"),
    require("postcss-nested"),
    require("postcss-custom-properties"),
    require("postcss-short-spacing"),
    require("autoprefixer"),
]

gulp.task("connect", () =>
{
    connect.server({ root, livereload: true })
})

const postcss = require("gulp-postcss")
const concat = require("gulp-concat")
const styles = "styles/**/*.css"
const scripts = "scripts/**/*.js"

gulp.task("css", () =>
{
    return gulp.src(styles)
        .pipe(concat("style.css"))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(root))
        .pipe(connect.reload())
})

gulp.task("js", () => 
{
    return gulp.src(scripts)
        .pipe(concat("main.js"))
        .pipe(gulp.dest(root))
        .pipe(connect.reload())
})

gulp.task("watch", () =>
{
    gulp.watch(styles, [ "css" ])

    gulp.watch(scripts, [ "js" ])
})

gulp.task("build", [ "css", "js" ])
    .task("default", [ "build" ])
    .task("dev", [ "connect", "build", "watch" ])
