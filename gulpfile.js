const gulp = require("gulp");
const mocha = require("gulp-mocha");
const config = require("./mocha.config");

gulp.task("test", () =>
    gulp.src("spec/*.spec.js")
        .pipe(mocha(config))
);