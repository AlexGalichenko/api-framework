const config = {
    reporter: 'mochawesome',
    reporterOptions: {
        reportFilename: 'customReportFilename',
        quiet: true,
    },
    timeout: 250000
};

module.exports = config;
