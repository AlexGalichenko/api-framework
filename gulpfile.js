const gulp = require("gulp");
const util = require("gulp-util");
const mocha = require("gulp-mocha");
const config = require("./mocha.config");
const xmlReporter = require("json-to-xml-reporter");

gulp.task("test", () => {
    gulp.src("spec/*.spec.js")
        .pipe(mocha(Object.assign(config, {
            globals: [`env=${util.env.env}`]
        })));
});

gulp.task('creation:xmlReport', () => {
    xmlReporter.jsonToXmlParser('./mochawesome-report/customReportFilename.json', 'xmlReport', './xml-report/');
});