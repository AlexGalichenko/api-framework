const path = require("path");
const jasmineReporters = require("jasmine-reporters");
const PrettyHTMLReporter = require("jasmine-pretty-html-reporter").Reporter;
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

const junitReporter = new jasmineReporters.JUnitXmlReporter({
    savePath: "./reports",
    consolidateAll: true
});

const prettyReporter = new PrettyHTMLReporter({
    path: path.join(__dirname, "reports")
});

const specReporter = new SpecReporter();

const config = {
    reporter: [junitReporter, specReporter, prettyReporter],
    errorOnFail: false
};

module.exports = config;
