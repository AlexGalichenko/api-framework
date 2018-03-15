const gulp = require("gulp");
const jasmine = require("gulp-jasmine");
const util = require("gulp-util");
const config = require("./jasmine.config");

gulp.task("test", () =>
    gulp.src("spec/*.spec.js")
        .pipe(jasmine(config))
);