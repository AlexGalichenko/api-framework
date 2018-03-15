const gulp = require("gulp");
const util = require("gulp-util");
const mocha = require("gulp-mocha");
const config = require("./mocha.config");

gulp.task("test", () => {
    gulp.src("spec/*.spec.js")
        .pipe(mocha(Object.assign(config, {
            globals: [`env=${util.env.env}`]
        })))
});