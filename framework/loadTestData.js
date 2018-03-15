const path = require("path");

function loadTestData(testDataFile, env = getEnv(), testDataFolder = path.resolve("./spec/test_data")) {
    const testDataPath = path.resolve(`${testDataFolder}/${env}/${testDataFile}`);
    try {
        return require(testDataPath);
    }
    catch(e) {
        if (e.message.includes("Cannot find module")) {
            throw new Error(`Test data ${testDataPath} is not found`)
        } else {
            throw e
        }
    }
}

function getEnv() {
    const GET_ENV_REGEXP = /.*-{2}env\s+(.*).*/;
    try {
        return process.argv.join(" ").match(GET_ENV_REGEXP)[1];
    }
    catch(e) {
        if (e.message.includes("Cannot read property '1' of null")) {
            throw new Error(`env param is not set`)
        } else {
            throw e
        }
    }
}

module.exports = loadTestData;